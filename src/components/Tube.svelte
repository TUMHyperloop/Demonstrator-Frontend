<button class="init">Write INIT Data</button>
<div />

<style>
    .init {
        /* font-family: 'Poppins';
        font-weight: 500;
        color: white;
        background-color: #212121;
        outline: 4px solid white;
        border-radius: 10px 0px 0px 10px;
        font-size: 23px;
        letter-spacing: -0.025rem;
        margin: 20px 0 0 15px;
        border: none;
        padding: 0 10px; */
    }
    .init {
        width: 150px;
        height: 100px;
        background: lightblue;
        -webkit-clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
        clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
    }

    div {
        height: 30px;
        width: 60px;
        background: yellow;
        position: relative;
    }
    div:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        border-top: 20px solid white;
        border-left: 20px solid yellow;
        width: 0;
    }
    div:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        border-top: 20px solid white;
        border-left: 20px solid yellow;
        width: 0;
    }
</style>
