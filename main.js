var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    function nextimage() {
      if i="3"
      {
        i="0";
      }
document.getElementById(family_member_name);
i++
    }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = ["Shaunak Jagtap", "Manjiri Jagtap","Rahul Jagtap", "Neha Jagtap"] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
