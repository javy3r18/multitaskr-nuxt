<template>
    <b-container>
        <h1>Confirm Information</h1>
        <p>Make sure your info is complete so you can download your report.</p>

        <form @submit.prevent="onSubmit">
            <b-row class="py-3">

                <b-col cols="6">
                    <b-form-file :multiple="true" @change="onFileChange" v-model="form.file" class="mt-3">
                    </b-form-file>
                </b-col>

            </b-row>
            <b-button v-if="this.images != 0" @click="onClickRemoveAll" variant="danger">Remove All</b-button>
            <b-row>
                <b-col class="py-2" v-for="image in images" cols="4">
                    <img v-if="image" :src="image" class="w-100" alt="">
                    <p>{{images_name[images.indexOf(image)].name}}</p>
                    <b-button @click="onClickRemove(images.indexOf(image))" squared class="w-100" variant="secondary">Remove</b-button>
                </b-col>
            </b-row>
           
            <b-button type="submit" variant="primary">Submit</b-button>

        </form>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            images: [],
            images_name: [],
            form: {
                file: []
            },
            errors: {},
        };
    },

    methods: {
        async onSubmit(event) {
            console.log(this.form.file)
            let formData = new FormData();
            this.form.file.forEach(element=> {
                console.log(element)
                formData.append("image[]", element, element.name);
            });
            try {
                await this.$store.dispatch("users/create", formData);
                console.log(this.form)
            } catch (error) {
                console.error(error);
                console.log(error.response);
                this.errors = error.response.data.errors;
            }
        },

        onFileChange(event) {
            console.log(event)
            this.images = []
            let files = event.target.files;
            this.images_name = event.target.files;
            for (let i = 0; i < files.length; i++) {
                this.images.push(URL.createObjectURL(files[i]))
            }
            // event.target.files.forEach(function(file) {
            //     this.images.push(URL.createObjectURL(file))
            // })
        },

        onClickRemove(index){
                this.images.splice(index, 1);
                this.form.file.splice(index, 1)
                console.log(this.form.file);
                if(this.images == 0){
                    this.form.file = []
                }
        },

        onClickRemoveAll(){
            this.images = []
            this.form.file = []
        },

        hasError(property) {
            if (!Object.keys(this.errors).length) return null;
            return !this.errors.hasOwnProperty(property);
        },
    },
};
</script>
