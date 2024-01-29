const hoverBox = document.querySelectorAll('.hover-box');

hoverBox.forEach((elm) => {
    elm.addEventListener('mouseover', (event) => {
        const authorName = elm.querySelector('.font-semibold').textContent;
        const logoSrc = elm.querySelector('img').src;
        // Create a new div element
        const hoverDiv = document.createElement('div');

        // Set styles for the div (adjust these as needed)
        hoverDiv.style.position = 'absolute';
        hoverDiv.style.padding = '10px';
        hoverDiv.style.borderRadius = '5px';
        hoverDiv.style.zIndex = '9999';
        hoverDiv.classList.add('hidden', 'sm:block', 'lg:block', 'md:block');
        // Set the content of the div (you can customize this)
        hoverDiv.innerHTML = `
        <div class="px-4 backdrop-blur-md leading-10 py-2 shadow-2xl">
            <div class="flex items-center gap-4 ">
                <img class="w-8 h-8 rounded-full object-cover mr-2" src="${logoSrc}" alt="Author Logo">
                <span class="font-semibold text-lg text-black">${authorName}</span>
            </div>
            <div class='mb-7'>
                <h2 class=" text-blue-500 font-semibold text-sm my-2"><i class="ri-book-fill"></i>Book Author</h2>
                <p class=' text-gray-900 text-sm'>Lorem ipsum, dolor sit amet consectetur</p>
            </div>
            <div >
                <p class='flex items-center justify-between'>1.4K Followers <button class='cursor-pointer px-3 text-white py-1 text-sm bg-blue-700 rounded-full'>Follow</button></p>
            </div>
        </div>
        `;

        // Calculate the position based on the hovered element
        const rect = event.target.getBoundingClientRect();
        hoverDiv.style.left = `${rect.left + window.scrollX + 100}px`;
        hoverDiv.style.top = `${rect.bottom + window.scrollY - 20}px`;

        // Append the div to the body
        document.body.appendChild(hoverDiv);

        // Add mouseout event to remove the div when mouse leaves the element
        elm.addEventListener('mouseout', () => {
            hoverDiv.remove();
        });
    });
});
