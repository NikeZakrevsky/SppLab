$(document).ready(
		function() {

			$(".file-dropzone").on('dragover', handleDragEnter);
			$(".file-dropzone").on('dragleave', handleDragLeave);
			$(".file-dropzone").on('drop', handleDragLeave);

			function handleDragEnter(e) {

				this.classList.add('drag-over');
			}

			function handleDragLeave(e) {

				this.classList.remove('drag-over');
			}

			// "dropzoneForm" is the camel-case version of the form id
			// "dropzone-form"
			Dropzone.options.dropzoneForm = {
					thumbnailWidth: null,
				    thumbnailHeight: null,
				url : "upload.do",
				autoProcessQueue : false,
				uploadMultiple : true,
				maxFilesize : 256, // MB
				parallelUploads : 100,
				maxFiles : 100,
				addRemoveLinks : true,
				previewsContainer : ".dropzone-previews",

				// The setting up of the dropzone
				init : function() {

					var myDropzone = this;

					// first set autoProcessQueue = false
					$('#upload-button').on("click", function(e) {

						myDropzone.processQueue();
					});

					// customizing the default progress bar
					this.on("uploadprogress", function(file, progress) {

						progress = parseFloat(progress).toFixed(0);

						var progressBar = file.previewElement
								.getElementsByClassName("dz-upload")[0];
						progressBar.innerHTML = progress + "%";
					});

					// displaying the uploaded files information in a Bootstrap
					// dialog
					this.on("successmultiple", function(files, serverResponse) {
						console.log(serverResponse);
						showInformationDialog(files, serverResponse);
					});
				}
			}

			function showInformationDialog(response) {

				console.log(response);
			}

		});
var app = angular.module('MyApp', []);
app.controller('MyCtrl', function($scope) {
	$scope.user = [];
	$scope.loadData = function(user) {
		console.log("sdkjhksdjfhlskdjfhs");
		$scope.user = JSON.parse(user);
	};
});