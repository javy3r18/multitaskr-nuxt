<template>

    <div>

        <b-row class="py-3">
            <b-col cols="8">
                <b-form-input v-model="form.search" type="search" placeholder="Search" required></b-form-input>
            </b-col>
            <b-col>
                <b-form-select v-model="form.limit" :options="[20, 40, 60, 80 ,100]"></b-form-select>
            </b-col>
            <b-col>
                <b-button-group>
                    <b-button :disabled="loading || form.offset == 0" @click="form.offset -= form.limit">Previous
                    </b-button>
                    <b-button :disabled="loading || form.offset + form.limit >= form.count"
                        @click="form.offset += form.limit">Next</b-button>
                </b-button-group>
            </b-col>
        </b-row>

    </div>

</template>

<script>
import {debounce} from "lodash";
export default {

    data() {
        let query = this.$route.query;
        return {
            form: {
                limit: query.limit ? parseInt(query.limit) : 20,
                offset: query.offset ? parseInt(query.offset) : 0,
                search: query.search ?? null,
                count: 0
            },
            loading: false
        };
    },

    watch: {
        form: {
            deep: true,
            handler(value, old) {
                this.$router.push({ query: value });
            }
        },

        search: debounce(function (value) {
            this.form.search = value
        }, 2000),
    }
};
</script>