# wxp-image-picker

> Weex 相机相册获取图片组件 

### 效果展示
![效果](images/ios-image.png)
<img alt="Join the chat at dingtalk" src="examples/wxp-image-picker/images/ios-image.png" width="240"/>

### 快速开始
  ```
  weexpack plugin add wxp-image-picker
  ```
### 使用方法

```
<template>
    <div class="conatiner">
        <text style="margin-bottom: 20px;">{{res}}</text>
        <div @click="createAction" style="margin: 20px;padding:20px;background-color:#1ba1e2;color:#fff;">
            <text style="color:#fff">选择图片</text>
        </div>
        <image style="height: 300px ;width: 300px;" :src="imageUrl"></image>
    </div>
</template>

<style>
    .container {
        flex: 1;
    }
</style>

<script>
    const plugin = weex.requireModule('imagePicker');
    module.exports = {
        data: {
            value: '',
            index: 0,
            txtChange: '',
            imageUrl: '',
            res: "",
        },
        methods: {
            createAction: function () {
                const DEFAULT_OPTIONS = {
                    title: '选择一张照片',
                    cancelButtonTitle: '取消',
                    takePhotoButtonTitle: '拍照',
                    chooseFromLibraryButtonTitle: '相册',
                    quality: 1.0,
                    allowsEditing: false,
                    permissionDenied: {
                        title: '没有权限',
                        text: '能够和你的相机拍照,选择图像从你的牌库。',
                        reTryTitle: 're-try',
                        okTitle: 'I\'m sure',
                    }
                };
                plugin.test();
                plugin.showImagePicker(DEFAULT_OPTIONS, (e) => {
                    this.res = JSON.stringify(e);
                    this.imageUrl = 'file://'+ e.path;
                    console.log('imageUrl=' + this.imageUrl);
                    console.log('res=' +this.res);
                 })
                ;

            }
        }
    }
</script>
```

### 参数说明

option | iOS  | Android | Info
------ | ---- | ------- | ----
title | OK | OK | Specify `null` or empty string to remove the title
cancelButtonTitle | OK | OK | Specify `null` or empty string to remove this button (Android only)
takePhotoButtonTitle | OK | OK | Specify `null` or empty string to remove this button
chooseFromLibraryButtonTitle | OK | OK | Specify `null` or empty string to remove this button
customButtons | OK | OK | An array containing objects with the name and title of buttons
cameraType | OK | - | 'front' or 'back'
mediaType | OK | OK | 'photo', 'video', or 'mixed' on iOS, 'photo' or 'video' on Android
maxWidth | OK | OK | Photos only
maxHeight | OK | OK | Photos only
quality | OK | OK | 0 to 1, photos only
videoQuality | OK |  OK | 'low', 'medium', or 'high' on iOS, 'low' or 'high' on Android
durationLimit | OK | OK | Max video recording time, in seconds
rotation | - | OK | Photos only, 0 to 360 degrees of rotation
allowsEditing | OK | - | bool - enables built in iOS functionality to resize the image after selection
noData | OK | OK | If true, disables the base64 `data` field from being generated (greatly improves performance on large photos)
storageOptions | OK | OK | If this key is provided, the image will be saved in your app's `Documents` directory on iOS, or your app's `Pictures` directory on Android (rather than a temporary directory)
storageOptions.skipBackup | OK | - | If true, the photo will NOT be backed up to iCloud
storageOptions.path | OK | - | If set, will save the image at `Documents/[path]/` rather than the root `Documents`
storageOptions.cameraRoll | OK | OK | If true, the cropped photo will be saved to the iOS Camera Roll or Android DCIM folder.
storageOptions.waitUntilSaved | OK | - | If true, will delay the response callback until after the photo/video was saved to the Camera Roll. If the photo or video was just taken, then the file name and timestamp fields are only provided in the response object when this is true.
permissionDenied.title | - | OK | Title of explaining permissions dialog. By default `Permission denied`.
permissionDenied.text | - | OK | Message of explaining permissions dialog. By default `To be able to take pictures with your camera and choose images from your library.`.
permissionDenied.reTryTitle | - | OK | Title of re-try button. By default `re-try`
permissionDenied.okTitle | - | OK | Title of ok button. By default `I'm sure`

### The Response Object

key | iOS | Android | Description
------ | ---- | ------- | ----------------------
didCancel | OK | OK | Informs you if the user cancelled the process
error | OK | OK | Contains an error message, if there is one
customButton | OK | OK | If the user tapped one of your custom buttons, contains the name of it
data | OK | OK | The base64 encoded image data (photos only)
uri | OK | OK | The uri to the local file asset on the device (photo or video)
origURL | OK | - | The URL of the original asset in photo library, if it exists
isVertical | OK | OK | Will be true if the image is vertically oriented
width | OK | OK | Image dimensions
height | OK | OK | Image dimensions
fileSize | OK | OK | The file size (photos only)
type | - | OK | The file type (photos only)
fileName | OK (photos and videos) | OK (photos) | The file name
path | - | OK | The file path
latitude | OK | OK | Latitude metadata, if available
longitude | OK | OK | Longitude metadata, if available
timestamp | OK | OK | Timestamp metadata, if available, in ISO8601 UTC format
originalRotation | - | OK | Rotation degrees (photos only) *See [#109](/../../issues/199)*

