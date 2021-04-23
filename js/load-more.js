loadBtn = document.querySelector('#load-media');
content = document.querySelectorAll('.extra-m-img');

const loadMore = (button, contentList)=> {
    let currentItems = 0;
    button.addEventListener('click', () => {
        for (let i = currentItems; i < currentItems + 4; i++) {
            if (contentList[i]) {
                contentList[i].classList.remove('d-none');
                console.log(contentList[i]); 
            }
        }
        currentItems += 4;
        if (currentItems >= contentList.length) {
        }
    });
};

loadMore(loadBtn, content);