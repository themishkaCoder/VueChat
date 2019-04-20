<template>
    <Content>
        <h2>Главная</h2>
        <Card :bordered="false">
            <p slot="title">{{msg}}</p>
            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type.</p>
        </Card>
    </Content>
</template>

<script>
export default {
    data(){
        return{
            msg: "First Post!"
        }
    }
}
</script>

<style>

</style>

