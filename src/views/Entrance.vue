<template>
    <header>
     <img class="icon" src="../assets/icon.png" />
    </header>
   
    <div class="back">
         <router-link to="/post">
            <div class="back-left">
                <img class="dasu"  src="../assets/idea_dasu.png" />
                <!-- onclick="goClick()" -->
            </div>
        </router-link> 
         <router-link to="/home">
            <div class="back-right">
                <img class="miru"  src="../assets/idea_miru.png" />
                <!-- onclick="goClick()" -->
            </div>
        </router-link> 
    </div>
    
        
    
    
</template>

<script>
  
</script>

<style scoped>
header {
    width: 100%;
    position: fixed;
    top: 0;
}


.back-left {
    width: 50%;
    height: 100vh;
    padding: 75px 0;
    background-color: #36D9BA;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
}

.back-right {
    width: 50%;
    height: 100vh;
    padding: 75px 0;
    background-color: #ffffff;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
}

.dasu {
    width: 100%;
    max-width: 500px;
    /* height: 90%; */
    margin: 0 auto;
    display: block;
    transition: all 0.6s ease 0s;
}

.dasu:hover {
	cursor: pointer;
	transform: scale(1.1, 1.1);
}

.miru {
    width: 90%;
    max-width: 550px;
    margin: 0 auto;
    transition: all 0.6s ease 0s;
}

.miru:hover {
	cursor: pointer;
	transform: scale(1.1, 1.1);
}
</style>