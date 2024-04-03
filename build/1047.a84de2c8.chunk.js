"use strict";(self.webpackChunkmy_strapi=self.webpackChunkmy_strapi||[]).push([[1047],{41047:(a,e,t)=>{t.r(e),t.d(e,{default:()=>s});const s={"apiError.FileTooBig":"The uploaded file exceeds the maximum allowed asset size.","upload.generic-error":"An error occurred while uploading the file.","bulk.select.label":"Select all assets","button.next":"Next","checkControl.crop-duplicate":"Duplicate & crop the asset","checkControl.crop-original":"Crop the original asset","content.isLoading":"Content is loading.","control-card.add":"Add","control-card.cancel":"Cancel","control-card.copy-link":"Copy link","control-card.crop":"Crop","control-card.download":"Download","control-card.edit":"Edit","control-card.replace-media":"Replace Media","control-card.save":"Save","control-card.stop-crop":"Stop cropping","filter.add":"Add filter","form.button.replace-media":"Replace media","form.input.decription.file-alt":"This text will be displayed if the asset can\u2019t be shown.","form.input.label.file-alt":"Alternative text","form.input.label.file-caption":"Caption","form.input.label.file-name":"File name","form.upload-url.error.url.invalid":"One URL is invalid","form.upload-url.error.url.invalids":"{number} URLs are invalids","header.actions.add-assets":"Add new assets","header.actions.add-folder":"Add new folder","header.actions.add-assets.folder":"folder","header.actions.upload-assets":"Upload assets","header.actions.upload-new-asset":"Upload new asset","header.content.assets-empty":"No assets","header.content.assets":"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}}","input.button.label":"Browse files","input.label":"Drag & Drop here or","input.label-bold":"Drag & drop","input.label-normal":"to upload or","input.placeholder":"Click to add an asset or drag & drop a file in this area","input.placeholder.icon":"Drop the asset in this zone","input.url.description":"Separate your URL links by a carriage return.","input.url.label":"URL","input.notification.not-supported":"You can't upload this type of file, only the following types are accepted \u2013 {fileTypes}","list.assets.title":"Assets ({count})","list.asset.at.finished":"The assets have finished loading.","list.assets-empty.search":"No result found","list.assets-empty.subtitle":"Add one to the list.","list.assets-empty.title":"There are no assets yet","list.assets-empty.title-withSearch":"There are no elements with the applied filters","list.assets.empty":"Media Library is empty","list.assets.empty-upload":"Upload your first assets...","list.assets.empty.no-permissions":"No permissions to view","list.assets.loading-asset":"Loading the preview for the media: {path}","list.assets.not-supported-content":"No preview available","list.assets.preview-asset":"Preview for the video at path {path}","list.assets.selected":"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}}","list-assets-select":"Select {name} asset","list.assets.type-not-allowed":"This type of file is not allowed.","list.assets.to-upload":"{number, plural, =0 {No asset} one {1 asset} other {# assets}} ready to upload","list.folder.edit":"Edit folder","list.folder.select":"Select {name} folder","list.folder.subtitle":"{folderCount, plural, =0 {# folder} one {# folder} other {# folders}}, {filesCount, plural, =0 {# asset} one {# asset} other {# assets}}","list.folders.title":"Folders ({count})","list.folders.link-label":"Access folder","mediaLibraryInput.actions.nextSlide":"Next slide","mediaLibraryInput.actions.previousSlide":"Previous slide","mediaLibraryInput.placeholder":"Click to add an asset or drag and drop one in this area","mediaLibraryInput.slideCount":"{n} of {m} slides","modal.file-details.date":"Date","modal.file-details.dimensions":"Dimensions","modal.file-details.extension":"Extension","modal.file-details.size":"Size","modal.file-details.id":"Asset ID","modal.folder.elements.count":"{folderCount} folders, {assetCount} assets","modal.header.browse":"Upload assets","modal.header.file-detail":"Details","modal.header.pending-assets":"Pending assets","modal.header.select-files":"Selected files","modal.header.go-back":"Go back","modal.folder.move.title":"Move elements to","modal.nav.browse":"browse","modal.nav.computer":"From computer","modal.nav.selected":"selected","modal.nav.url":"From url","modal.remove.success-label":"Elements have been successfully deleted.","modal.move.success-label":"Elements have been moved successfully","modal.selected-list.sub-header-subtitle":"Drag & drop to reorder the assets in the field","modal.upload-list.footer.button":"Upload {number, plural, one {# asset} other {# assets}} to the library","modal.upload-list.sub-header-subtitle":"Manage the assets before adding them to the Media Library","modal.upload-list.sub-header.button":"Add more assets","modal.upload.cancelled":"Upload manually aborted.","page.title":"Settings - Media Library","permissions.not-allowed.update":"You are not allowed to edit this file.","plugin.description.long":"Media file management.","plugin.description.short":"Media file management.","plugin.name":"Media Library","search.clear.label":"Clear the search","search.label":"Search for an asset","search.placeholder":"e.g: the first dog on the moon","settings.blockTitle":"Asset Management","settings.form.autoOrientation.description":"Enabling this option will automatically rotate the image according to EXIF orientation tag.","settings.form.autoOrientation.label":"Auto orientation","settings.form.responsiveDimensions.description":"Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset.","settings.form.responsiveDimensions.label":"Responsive friendly upload","settings.form.sizeOptimization.description":"Enabling this option will reduce the image size and slightly reduce its quality.","settings.form.sizeOptimization.label":"Size optimization","settings.form.videoPreview.description":"It will generate a six-second preview of the video (GIF)","settings.form.videoPreview.label":"Preview","settings.header.label":"Media Library","settings.section.doc.label":"Doc","settings.section.image.label":"Image","settings.section.video.label":"Video","settings.sub-header.label":"Configure the settings for the Media Library","sort.created_at_asc":"Oldest uploads","sort.created_at_desc":"Most recent uploads","sort.label":"Sort by","sort.name_asc":"Alphabetical order (A to Z)","sort.name_desc":"Reverse alphabetical order (Z to A)","sort.updated_at_asc":"Oldest updates","sort.updated_at_desc":"Most recent updates","list.table.header.actions":"actions","list.table.header.preview":"preview","list.table.header.name":"name","list.table.header.ext":"extension","list.table.header.size":"size","list.table.header.createdAt":"created","list.table.header.updatedAt":"last update","list.table.header.sort":"Sort on {label}","list.table.content.empty-label":"This field is empty","tabs.title":"How do you want to upload your assets?","window.confirm.close-modal.file":"Are you sure? Your changes will be lost.","window.confirm.close-modal.files":"Are you sure? You have some files that have not been uploaded yet.","config.back":"Back","config.subtitle":"Define the view settings of the media library.","config.entries.title":"Entries per page","config.sort.title":"Default sort order","config.entries.note":"Number of assets displayed by default in the Media Library","config.note":"Note: You can override this value in the media library.","config.popUpWarning.warning.updateAllSettings":"This will modify all your settings","view-switch.list":"List View","view-switch.grid":"Grid View"}}}]);
