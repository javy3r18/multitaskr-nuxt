<template>
    <b-container>
        <h1>Login</h1>

        <form @submit.prevent="onSubmit">
            <b-row>

                <b-col cols="6">
                    <b-form-group label="Email:" label-for="email">
                        <b-form-input :state="hasError('email')" id="email" v-model="form.username"
                            placeholder="Enter email"></b-form-input>
                        <b-form-invalid-feedback v-for="error in errors.email">{{
                        error
                        }}</b-form-invalid-feedback>
                    </b-form-group>
                </b-col>

            </b-row>

            <b-row>

                <b-col cols="6">
                    <b-form-group label="Password:" label-for="password">
                        <b-form-input type="password" :state="hasError('password')" id="password" v-model="form.password"
                            placeholder="Enter password"></b-form-input>
                        <b-form-invalid-feedback v-for="error in errors.phone">{{
                        error
                        }}</b-form-invalid-feedback>    
                    </b-form-group>
                </b-col>

            </b-row>

            <b-button type="submit" variant="primary">Login</b-button>
        </form>
    </b-container>
</template>

<script>
export default {
    layout: 'empty',
    data() {
        return {
            form: {
                username: null,
                password: null
            },
            errors: {},
        };
    },

    methods: {

        async onSubmit(event) {
            try {
                let response = await this.$auth.loginWith('local', { data: this.form})
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>
