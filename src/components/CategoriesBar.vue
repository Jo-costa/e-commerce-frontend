<template>
    <div class="p-4 mr-16 ml-16 border-b-2">

        <div class="">
            <ul class="">
                <li class=""><a href="" class="rounded hover:bg-teal-400 p-2 transition-all">
                        Phone</a></li>
                <li><a href="" class="rounded hover:bg-teal-400 p-2 transition-all">
                        Entertainment</a></li>
                <li><a href="" class="rounded hover:bg-teal-400 p-2 transition-all">
                        Computing</a>
                </li>
                <li>
                    <a href="" class="rounded hover:bg-teal-400 p-2 transition-all">
                        Tablets</a>
                </li>
                <li><a href="" class="rounded hover:bg-teal-400 p-2 transition-all">
                        Audio</a>
                </li>
                <li><a href="" class="rounded hover:bg-teal-400 p-2 transition-all">
                        Cameras and
                        Camcorders</a></li>


            </ul>
        </div>


    </div>
</template>

<script>

export default {
    name: "CategoriesBar",
    // props: {
    //     isOpen: false,
    // },

    data() {
        return {
            isOPen: false,
        }
    },
    methods: {
        showCategoriesBar() {
            this.isOPen = this.isOPen ? false : true;
        }
    }
}

</script>


<style>
.categories-wrapper {
    width: 95%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 1em;
    /* background-color: aqua; */
}

.open-categories-bar {
    width: 13%;
    display: flex;

}

.categories-links {
    width: 70%;
    display: flex;
    justify-content: flex-end;
}

ul {
    width: 100%;
    display: flex;
    justify-content: space-between;



}

.categories-links li {
    list-style: none;
    /* background-color: rgba(250, 235, 215, 0.655); */
    padding: 12px 10px 12px 10px;
    cursor: pointer;
}

.categories-links li:hover {
    background-color: rgba(117, 148, 183, 0.482);
    border-radius: 8px;
    /* padding: 12px 10px; */
    transition: .3s ease-in-out;
}

li a {
    text-decoration: none;
    color: rgb(0, 0, 0);

}
</style>