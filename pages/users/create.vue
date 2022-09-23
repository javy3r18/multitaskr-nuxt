<template>
    <b-container>
        <h1>Confirm Information</h1>
        <p>Make sure your info is complete so you can download your report.</p>

        <form @submit.prevent="onSubmit" @keyup="clearError">
            <b-row class="py-3">

                <b-col cols="6">
                    <b-form-group label="First name:" label-for="name">
                        <b-form-input name="name" :state="hasError('name')" id="name" v-model="form.name"
                            placeholder="Enter first name"></b-form-input>
                        <b-form-invalid-feedback v-for="error in errors.name">{{
                        error
                        }}</b-form-invalid-feedback>
                    </b-form-group>
                </b-col>

                <b-col cols="6">
                    <b-form-group label="Last name:" label-for="last_name">
                        <b-form-input name="last_name" :state="hasError('last_name')" id="last_name" v-model="form.last_name"
                            placeholder="Enter last name"></b-form-input>
                        <b-form-invalid-feedback v-for="error in errors.last_name">{{ error }}</b-form-invalid-feedback>
                    </b-form-group>
                </b-col>

            </b-row>

            <b-row>

                <b-col cols="6">
                    <b-form-group label="Email:" label-for="email">
                        <b-form-input name="email" :state="hasError('email')" id="email" v-model="form.email"
                            placeholder="Enter email"></b-form-input>
                        <b-form-invalid-feedback v-for="error in errors.email">{{
                        error
                        }}</b-form-invalid-feedback>
                    </b-form-group>
                </b-col>

                <b-col cols="6">
                    <b-form-group label="Phone number:" label-for="phone">
                        <b-form-input name="phone" :state="hasError('phone')" id="phone" v-model="form.phone"
                            placeholder="Enter phone number"></b-form-input>
                        <b-form-invalid-feedback v-for="error in errors.phone">{{
                        error
                        }}</b-form-invalid-feedback>    
                    </b-form-group>
                </b-col>

            </b-row>

            <b-button type="submit" variant="primary">Submit</b-button>
            <pre>{{ errors }}</pre>
        </form>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: null,
                last_name: null,
                email: null,
                phone: null,
                source: null,
                deal_uid: "1ba8444e-df99-4439-9d71-82301d773c3c",
            },
        };
    },

    methods: {
        async onSubmit(event) {
            console.log(event);
            try {
                await this.$store.dispatch("users/create", this.form);
            } catch (error) {
                console.error(error);
            }
        },

    },
};
</script>
