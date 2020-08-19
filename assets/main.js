 


var name = "123";
var address_1 = "";
var address_2 = "";
var city = "";
var state = "";
var postcode = "";
var country = "";
var message = "";

//gettting value for name
document.getElementById("postcard_recipients_attributes_0_name").addEventListener('change', function changeInput(){
    console.log(this.value)
    console.log(this)
    name = this.value
 });

//gettting value for address_1
 document.getElementById("postcard_recipients_attributes_0_address_1").addEventListener('change', function changeInput(){
    address_1 = this.value
 });

//gettting value for address_2
document.getElementById("postcard_recipients_attributes_0_address_2").addEventListener('change', function changeInput(){
    address_2 = this.value
 });

//gettting value for city
document.getElementById("postcard_recipients_attributes_0_city").addEventListener('change', function changeInput(){
    city = this.value
 });

//gettting value for state
document.getElementById("postcard_recipients_attributes_0_state").addEventListener('change', function changeInput(){
    state = this.value
 });

//gettting value for postcode
document.getElementById("postcard_recipients_attributes_0_postcode").addEventListener('change', function changeInput(){
    postcode = this.value
 });

 //gettting value for postcard_message
document.getElementById("postcard_message").addEventListener('change', function changeInput(){
   if(this.value.length > 300)
   return;
    message = this.value
 });
 
//confirm and pay button
function handleSubmit(){
    console.log(name, address_1, address_2, city, state, postcode, country, message)
 }
 
 
