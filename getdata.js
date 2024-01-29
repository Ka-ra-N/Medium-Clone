const articleData = {
    id1: {
        authorName: "Yuri Minamide",
        heading: "✨The Advanced Manual of Self-Improvement✨",
        imageUrl: "./assets/article-2.png",
    },
    id2: {
        authorName: "Adam Scotti",
        heading: "26 things for 26",
        imageUrl: "./assets/article-3.jpg",
    },
    id3: {
        authorName: "Cassie Kozyrkov",
        heading: "2023: A Review of the Year in Neuroscience",
        imageUrl: "./assets/article-4.png",
    },
    id4: {
        authorName: "Robert Roy Britt",
        heading: "✨The Advanced Manual of Self-Improvement✨",
        imageUrl: "./assets/article-5.jpg",
    },
    id5: {
        authorName: "Hanif Abdurraqib",
        heading: "Birds, bugs, and beauty: The winners of Wiki Loves Earth 2023",
        imageUrl: "./assets/article-2.png",
    },
    id6: {
        authorName: "Mark Humphries",
        heading: "Get in the Van.",
        imageUrl: "./assets/article-6.jpg",
    },
    id7: {
        authorName: "Wikimedia",
        heading: "Zen and the Art of Mountain Biking",
        imageUrl: "./assets/article-7.jpg",
    },
    id8: {
        authorName: "Teju Adeyinka",
        heading: "32 of our favorite Medium stories of 2023",
        imageUrl: "./assets/article-8.png",
    },
    id9: {
        authorName: "Joan Westenberg",
        heading: "32 of our favorite Medium stories of 2023",
        imageUrl: "./assets/article-9.jpg",
    },
    id10: {
        authorName: "Quentin Septer",
        heading: "32 of our favorite Medium stories of 2023",
        imageUrl: "./assets/article-10.jpg",
    },
    id11: {
        authorName: "Glenn Jeffers",
        heading: "✨The Advanced Manual of Self-Improvement✨",
        imageUrl: "./assets/article-11.png",
    },
    id12: {
        authorName: "Rochelle Deans",
        heading: "26 things for 26",
        imageUrl: "./assets/article-12.jpg",
    },
    id13: {
        authorName: "Séphora Bemba",
        heading: "2023: A Review of the Year in Neuroscience",
        imageUrl: "./assets/article-13.jpg",
    },
    id14: {
        authorName: "Lessig",
        heading: "✨The Advanced Manual of Self-Improvement✨",
        imageUrl: "./assets/article-14.png",
    },
    id15: {
        authorName: "Hillary Clinton",
        heading: "Birds, bugs, and beauty: The winners of Wiki Loves Earth 2023",
        imageUrl: "./assets/article-15.png",
    },
    id16: {
        authorName: "rachel audige",
        heading: "Get in the Van.",
        imageUrl: "./assets/article-16.jpg",
    },
    id17: {
        authorName: "Lyman Stone",
        heading: "Zen and the Art of Mountain Biking",
        imageUrl: "./assets/article-17.png",
    },
    id18: {
        authorName: "Analytics at Meta",
        heading: "32 of our favorite Medium stories of 2023",
        imageUrl: "./assets/article-18.jpg",
    },
    id19: {
        authorName: "Jessica Zhu",
        heading:
            "Data engineering at Meta: High-Level Overview of the internal tech stacks",
        imageUrl: "./assets/article-19.jpg",
    },
    id20: {
        authorName: "Pau Blasco i Roca",
        heading: "Talking to You",
        imageUrl: "./assets/article-20.png",
    },
    id21: {
        authorName: "Yutong Xue",
        heading:
            "My Life Stats: I Tracked My Habits for a Year, and This Is What I Learned",
        imageUrl: "./assets/article-21.jpg",
    },
};

const dummyLorem =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed perspiciatis veniam eum sapiente?";

// Function to create and append new elements
function appendDynamicContent(data) {
    const dynamicContent = document.getElementById("dynamic-content");

    // Create a new element
    const newElement = document.createElement("div");
    newElement.classList.add("basis-full", "sm:basis-2/3", "mb-4"); // Add necessary classes

    // Construct the inner HTML using data
    newElement.innerHTML = `
    <div class="flex flex-row pr-2 sm:pr-11 gap-2 sm:gap-3">
    <div id="article-content" class="basis-full">
        <div id="article-1">
            <div id="article-1-heading" class="cursor-pointer inline-block hover-box">
                <img class="inline-block w-6 h-6 rounded-full object-cover sm:w-8 sm:h-8"
                    src="./assets/person-1.avif" alt="Admin Photo" />
                <span class="font-semibold text-sm sm:text-base">${data.authorName}</span>
            </div>
            <div id="article-1-content" class="relative cursor-pointer openPopup w-full h-full py-2">
                <h4 class="font-bold capitalize text-base sm:text-xl md:lg-xl lg-xl">${data.heading}</h4>
                <h4 class="text-base sm:text-lg md:text-lg lg:text-lg text-gray-500 mb-2 line-clamp-2 lg:line-clamp-none md:line-clamp-none">
                    ${dummyLorem}
                </h4>
                <div class="flex flex-row">
                    <div class="basis-4/5">
                        <h4 class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-sm text-gray-500 mb-2">
                            Jan 1, 2024 5 min read
                        </h4>
                    </div>
                    <div class="basis-1/5 text-xl text-gray-500 sm:text-2xl"><i class="ri-bookmark-2-line"></i></div>
                </div>
            </div>
        </div>
    </div>
    <div class="basis-full lg:basis-1/3 md:basis-1/2 sm:1/4">
        <img class="w-full h-auto" src="${data.imageUrl}" alt="some image">
    </div>
</div>
    `;

    // Append the new element to the dynamicContent container
    dynamicContent.appendChild(newElement);
}

// Append dynamic content for each item in articleData
for (const key in articleData) {
    if (Object.hasOwnProperty.call(articleData, key)) {
        const item = articleData[key];
        appendDynamicContent(item);
    }
}
