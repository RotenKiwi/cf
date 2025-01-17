async function endpoint(data, request_type) {
    var result;
    data = JSON.stringify(data);
    // encrypting request type

    var settings = {
        "url": "http://128.199.25.59/endpoints/endpoint.php",
        // "url": "http://localhost/endpoints/endpoint.php",
        "method": "POST",
        "dataType": "json",
        "async": true,
        "timeout": 0,
        "data": {
            "data": data,
            "request_type": request_type
        },
        success: function (response, textStatus, xhr) {
            if (xhr.status == 200) {
                result = response;
                result['statusCode'] = xhr.status;
            } else {
                result = {
                    "statusCode": xhr.status,
                    "status": false,
                    "msg": "Some error occured!"
                };
            }
        }
    };
    await $.ajax(settings);
    return result;
}
