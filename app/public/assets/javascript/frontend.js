//   issues with separate JS file




//console.log("connect to frontend.js");


// var config = {
//     ".chosen-select": {},
//     ".chosen-select-deselect": {
//         allow_single_deselect: true
//     },
//     ".chosen-select-no-single": {
//         disable_search_threshold: 10
//     },
//     ".chosen-select-no-results": {
//         no_results_text: "Oops, nothing found!"
//     },
//     ".chosen-select-width": {
//         width: "95%"
//     }
// };

// for (var selector in config) {
//     $(selector).chosen(config[selector]);
// }

// // Capture the form inputs
// $("#submit").on("click", function (event) {
//     event.preventDefault();

//     // Form validation
//     function validateForm() {
//         var isValid = true;
//         $(".form-control").each(function () {
//             if ($(this).val() === "") {
//                 isValid = false;
//             }
//         });

//         $(".chosen-select").each(function () {

//             if ($(this).val() === "") {
//                 isValid = false;
//             }
//         });
//         return isValid;
//     }

//     // If all required fields are filled
//     if (validateForm()) {
//         // Create an object for the user"s data
//         var userData = {
//             name: $("#name").val(),
//             photo: $("#photo").val(),
//             scores: [
//                 $("#q1").val(),
//                 $("#q2").val(),
//                 $("#q3").val(),
//                 $("#q4").val(),
//                 $("#q5").val(),
//                 $("#q6").val(),
//                 $("#q7").val(),
//                 $("#q8").val(),
//                 $("#q9").val(),
//                 $("#q10").val()
//             ]
//         };

//         var currentURL = window.location.origin;
//         // AJAX post the data to the friends API.
//         $.post(currentURL + "/api/friends", userData, function (friendsArray) {

//             // Grab the result from the AJAX post so that the best match's name and photo are displayed.
//             $("#match-name").text(friendsArray.name);
//             $("#match-img").attr("src", friendsArray.photo);

//             // Show the modal with the best match
//             $("#results-modal").modal("toggle");
//             console.log('userdata: ' + userData);
//             console.log('data.name: ' + friendsArray.name);
//         });
//     } else {
//         alert("Please fill out all fields before submitting!");
//     }
// });