var node = document.getElementById("node");
var image = document.getElementById("image-node");

function SendPostCard() {
  var firstImage;
  var secondImage;
  //generating an image from the node
  domtoimage.toBlob(node).then(function (dataUrl) {
    console.log(dataUrl);
    var file = document.getElementById("postcard_temp_image");

    var formFront = new FormData();
    var formBack = new FormData();
    formBack.append("image", dataUrl);
    formFront.append("image", file.files[0]);

    //uploading to imagebb to get a url back
    var settingsFront = {
      url:
        "https://api.imgbb.com/1/upload?key=b6f6d5764f747be4cbdd7a3b93932b89",
      method: "POST",
      timeout: 0,
      processData: false,
      mimeType: "multipart/form-data",
      contentType: false,
      data: formFront,
    };
    var settingsBack = {
      url:
        "https://api.imgbb.com/1/upload?key=b6f6d5764f747be4cbdd7a3b93932b89",
      method: "POST",
      timeout: 0,
      processData: false,
      mimeType: "multipart/form-data",
      contentType: false,
      data: formBack,
    };

    $.ajax(settingsBack).done(function (response) {
      var jx = JSON.parse(response);
      firstImage = jx.data.url;

      //nested because can't use promises or async/await
      $.ajax(settingsFront).done(function (response) {
        var jxSecond = JSON.parse(response);
        secondImage = jxSecond.data.url;

        const data = {
            "recipients": [
                {
                  "return_address_id": 91591,
                  "schedule": 0,
                  "address_postal_code": "50465",
                  "address_country": "US",
                  "address_line_1": "3481 Tree Frog Lane",
                  "address_state": "IA",
                  "address_name": "John Smith",
                  "address_line_2": "",
                  "address_city": "RAKE"
                }
              ],
              "file_urls": [
                  "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/a5_front.pdf",
                  "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/a5_back.pdf",
              ],
        }
        

        //sending postcard out
        fetch("https://rest.clicksend.com/v3/post/postcards/send", {
            body: JSON.stringify(data),
            headers: {
            Authorization:
              "Basic cG9zdGNhcmRzOjc3NjUyOUJELUQzN0YtNjU5RC05NjE3LTY3MUIzRkMxMjY2MA==",
              "Content-Type": "application/json",
          },
          method: "POST",
        })
          .then(async (res) => {
            const response = await res.json();
            console.log(response);
          })
          .catch((err) => {
            console.log("err", err);
          });
      });
    });
  });
}
