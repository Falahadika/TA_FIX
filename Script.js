const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6ba47e683amsh306bcb2a559c0adp1e30f6jsna6a0fbf83983',
		'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
	}
};

// fetch('https://steam2.p.rapidapi.com/search/Counter/page/1', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err)); 

    
const userInput = document.querySelector('input');
const btn = document.querySelector('button');
    
let params = ''
const callParams = () => {
        params = userInput.value
        fetch(`https://steam2.p.rapidapi.com/search/${params}/page/1`, options)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                let output = '';
                data.map(item => {
                    output += `
                        <div class="box" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
                            <img src="${item.imgUrl}" alt="" />
                            <h1>${item.title}</h1>
                            <p>harga: ${item.price}.</p>
                        </div>

    
    
    
                        `;
    
                })
                document.querySelector('.box-famous').innerHTML = output;
            })
            .catch(err => console.error(err));
        userInput.value = '';
    }
    
    
    btn.addEventListener('click', callParams)