import { ref, onMounted, watch } from 'vue';
import { Plugins, CameraResultType, CameraSource, CameraPhoto, Capacitor, FilesystemDirectory } from '@capacitor/core'; 

export interface Photo {
    filepath: string;
    webviewpath?: string;
}

export function usePhotoGallery () {
    const PHOTO_STORAGE = "photos";
    const { Camera, Filesystem, Storage } = Plugins;
    const photos = ref<Photo[]> ([]);

    const cachePhotos = () => {
        Storage.set({
            key: PHOTO_STORAGE,
            value: JSON.stringify(photos.value)
        })
    }

    watch(photos, cachePhotos);

    const loadSaved = async () => {
        const photoList = await Storage.get({ key: PHOTO_STORAGE });
        const photoInStorage = photoList.value ? JSON.parse(photoList.value) : [];

        for (const photo of photoInStorage) {
            const file = await Filesystem.readFile({
                path: photo.filepath,
                directory: FilesystemDirectory.Data
            })

            photo.webviewpath = `data:image/jpeg;base64,${file.data}`
        }
        photos.value = photoInStorage;
    }

    onMounted(loadSaved);

    const convertBlobtoBase64 = (blob: Blob) => new Promise ((resolve, reject) => {
        const reader = new FileReader;
        reader.onerror = reject;
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.readAsDataURL(blob);

    });

    const savePicture = async(photo: CameraPhoto, fileName: string): Promise<Photo> => {

        const response = await fetch(photo.webPath!);
        const blob = await response.blob();
        const base64Data = await convertBlobtoBase64(blob) as string;

        const savedFile = await Filesystem.writeFile({
            path: fileName,
            data: base64Data,
            directory: FilesystemDirectory.Data
        });

        return {
            filepath: fileName,
            webviewpath: photo.webPath
        }  
    }

    const takePhoto = async () => {
        const cameraPhoto = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100
        });

        const fileName = new Date().getTime() + '.jpeg';
        const savedFileImage = await savePicture(cameraPhoto, fileName);
        photos.value = [savedFileImage, ...photos.value];
    };


    return {
        photos,
        takePhoto
    }
}