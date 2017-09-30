// hide all items
function collapseAll() 
{
var tags = document.getElementsByTagName('*'); 
for(var i=0;i<tags.length;i++) 
{
   if(tags[i].className=='item') 
   tags[i].className="itemHidden"; 
   
   if(tags[i].className=='highlighted') 
   tags[i].className=""; 
   
}
}


// menu script
function showDetail(itemId, linkId) 
{
 collapseAll();
 linkId.className = "highlighted";
 
 for (i=0; i<document.allItems.listOfItems.length; i++)
     {
    if(document.allItems.listOfItems.options[i].value == itemId)
    document.allItems.listOfItems.options[i].selected = true;
    }
 
 if (document.getElementById) 
 {
  var docElem = document.getElementById(itemId);
  if (docElem.className == "item") 
      {
       docElem.className = "itemHidden";
    } 
    else 
       {
       docElem.className = "item";
    } 
  return true;
  } 
  else
  {
  return false;
  }
}

// combo box script
function showSelected() 
{
var selIndex = document.allItems.listOfItems.selectedIndex; 
var theValue = document.allItems.listOfItems.options[ selIndex ].value; 
showDetail(theValue, this);

}

function getUrlItem()
        {
        var myItem, myPosition;
        
        myPosition = window.location.href.indexOf("#")+1;
        myItem = window.location.href.substr(myPosition);
        if (myPosition != 0)
            {
            showDetail(myItem, this);
            }
        }


