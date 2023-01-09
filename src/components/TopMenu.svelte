<script>
    import logo from '../assets/logo.svg'
    import notification from '../assets/notification.svg'
</script>

<div class="top-menu">
    <div class="header">
        <img src={logo} alt="" />
        <p>Demonstrator</p>
    </div>
    <div class="main">
        <div class="tab selected">
            <p>Tube</p>
        </div>
        <div class="tab">
            <img src={notification} alt="" />
            <p>Vacuum</p>
        </div>
        <div class="tab">
            <p>Interior</p>
        </div>
        <div class="tab">
            <p>Propulsion</p>
        </div>
        <div class="tab">
            <p>Levitation</p>
        </div>
    </div>
</div>

<style>
    .top-menu {
        height: 100%;
        width: 100%;
        background-color: #424242;
        display: flex;
        position: relative;
        color: white;
    }
    .header {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 246px;
        cursor: pointer;
    }
    .header p {
        margin-left: 10px;
        font-family: 'Poppins';
        font-size: 16px;
        font-weight: 500;
    }
    .main {
        display: flex;
    }
    .tab {
        height: 100%;
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Poppins';
        font-size: 16px;
        cursor: pointer;
    }
    .tab img {
        margin-right: 15px;
    }
    .selected {
        background-color: #212121;
    }
    .tab:not(.selected):hover {
        background-color: #575757;
    }
</style>
