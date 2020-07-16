/* 

// HTML elements
<input type="file" name="filePhoto" value="" id="filePhoto" class="required borrowerImageFile" data-errormsg="PhotoUploadErrorMsg">
<img id="previewHolder" alt="Uploaded Image Preview Holder" width="250px" height="250px"/> 

*/
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
        $('#previewHolder').attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
}
}

$("#filePhoto").change(function() {
readURL(this);
});