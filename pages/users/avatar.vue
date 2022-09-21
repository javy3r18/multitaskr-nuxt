<template>
    <b-container>
        <h1>Confirm Information</h1>
        <p>Make sure your info is complete so you can download your report.</p>

        <form @submit.prevent="onSubmit">
            <b-row class="py-3">

                <b-col cols="6">
                    <b-form-file :multiple="true" @change="onFileChange" v-model="form.file" class="mt-3" plain>
                    </b-form-file>
                </b-col>

            </b-row>
            <img v-for="image in images" class="w-25" :src="image" alt="">
            <b-button type="submit" variant="primary">Submit</b-button>

        </form>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            images: [],
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
            let files = event.target.files;
            for (let i = 0; i < files.length; i++) {
                this.images.push(URL.createObjectURL(files[i]))
            }
            // event.target.files.forEach(function(file) {
            //     this.images.push(URL.createObjectURL(file))
            // })
        },

        hasError(property) {
            if (!Object.keys(this.errors).length) return null;
            return !this.errors.hasOwnProperty(property);
        },
    },
};
</script>
