<template>
    <b-container>
        <h1>Confirm Information</h1>
        <p>Make sure your info is complete so you can download your report.</p>

        <form @submit.prevent="onSubmit">
            <b-row class="py-3">

                <b-col cols="6">
                    <b-form-file :multiple="true" @change="onFileChange" v-model="form.images" class="mt-3">
                    </b-form-file>
                </b-col>

            </b-row>
            <b-row>
                <b-col class="py-2" v-for="(image, index) in form.images" cols="4">
                    <b-card>
                        <img :src="getUrlFromObject(image)" class="w-100" alt="">
                        <b-card-text>
                            <p>Name: {{image.name}}</p>
                        </b-card-text>
                        <b-card-text>
                            <p>Size: {{image.size}}</p>
                        </b-card-text>
                        <b-card-text>
                            <p>Type: {{image.type}}</p>
                        </b-card-text>
                        
                        <b-button @click="onClickRemove(index)" squared class="w-100"
                        variant="secondary">Remove</b-button>
                    </b-card>
                </b-col>
            </b-row>
            
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button v-if="this.form.images.length" @click="onClickRemoveAll" variant="danger">Remove All</b-button>

        </form>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            form: {
                images: []
            },
            errors: {},
        };
    },

    methods: {
        async onSubmit(event) {
            console.log(this.form.images)
            let formData = new FormData();
            this.form.images.forEach(element => {
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

        onClickRemove(index) {
            this.form.images.splice(index, 1)
        },

        onClickRemoveAll() {
            this.form.images = []
        },

        hasError(property) {
            if (!Object.keys(this.errors).length) return null;
            return !this.errors.hasOwnProperty(property);
        },

        getUrlFromObject(image) {
            return URL.createObjectURL(image)
        }
    },
};
</script>
