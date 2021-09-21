<template>
    <div class="back">
        <div class="back-left">
            <img class="dasu" onclick="goClick()" src="../assets/idea_dasu.png" />
        </div>
        <div class="back-right">
            <img class="miru" onclick="goClick()" src="../assets/idea_miru.png" />
        </div>
    </div>
    
        
    
    
</template>

<script>
  
</script>

<style scoped>

.back-left {
    height: 570px;
    width: 50%;
    background-color: #36D9BA;
    float: left;
}

.back-right {
    height: 570px;
    width: 50%;
    background-color: #ffffff;
    float: left;
}

.dasu {
    width: 86%;
    height: 90%;
    margin-left: 7%;
    margin-top: 5%;
    transition: all 0.6s ease 0s;
}

.dasu:hover {
	cursor: pointer;
	transform: scale(1.1, 1.1);
}

.miru {
    width: 90%;
    height: 100%;
    margin-left: 5%;
    margin-top: 0;
    transition: all 0.6s ease 0s;
}

.miru:hover {
	cursor: pointer;
	transform: scale(1.1, 1.1);
}
</style>