const postContainer = document.getElementById('postContainer')
let post=[];
let start=0;
end=9;

function createPOstCard(ID_NUMBER,NAME,USERNAME,EMAIL_ID,ADDRERSS,PHONE_NUMBER,COMPANY_NAME){
    const cd = `<div class="col-md-4">
    <div class="card">
      <div class="card-block">
        <h4 class="card-title">${ID_NUMBER}</h4>
        <h6 class="card-subtitle text-muted">${NAME}</h6>
        <p class="card-text p-y-1">${USERNAME}</p>
        <p class="card-text p-y-1">${EMAIL_ID}</p>
        <p class="card-text p-y-1">${ADDRESS}</p>
        <p class="card-text p-y-1">${PHONE_NUMBER}</p>
        <p class="card-text p-y-1">${COMPANY_NAME}</p>
      </div>
    </div>
  </div>`;
  return cd;
}