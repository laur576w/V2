var i

const tabs = document.querySelectorAll('nav > ul > li')
const divs = document.querySelectorAll('.content > div')

function moveClass(e) {
    if (e.target.nodeName == 'LI' && tabs.length === divs.length) {
            var preActive = document.querySelector('li.active')
            var preShow = document.querySelector('div.show')

            preActive !== null && preActive.classList.remove('active')
            preShow !== null && preShow.classList.remove('show')

            e.target.classList.add('active')

            const tabId = e.target.id;
            const contentId = 'con' + e.target.id.slice(-1);


            const contentToShow = document.getElementById(contentId);
            if (contentToShow) {
                contentToShow.classList.add('show');
            }
            // switch (e.target.id) {
            //     case 'tab1':
            //         document.getElementById('con1').classList.add('show')
            //         break
            //     case 'tab2':
            //         document.getElementById('con2').classList.add('show')
            //         break
            //     case 'tab3':
            //         document.getElementById('con3').classList.add('show')
            //         break
            // }
    }
}

document.querySelector('nav').addEventListener('click', moveClass)