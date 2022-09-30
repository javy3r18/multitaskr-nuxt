<template>
    <b-container>
        <b-row class="mt-3">
            <b-col>
                <b-card
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem"
                    class="mb-2"
                    body-class="d-flex justify-content-center"
                >
                    <div>
                        <b-avatar
                            style="top: 30%; left: 33%;"
                            size="7rem"
                            variant="dark"
                            :text="user.initials"
                            class="position-absolute"
                        ></b-avatar>
                    </div>
                    <div>
                        <strong>{{ user.name }}</strong>
                    </div>
                </b-card>

                <b-card
                    title="Contact info"
                    style="max-width: 20rem"
                    class="mb-2"
                >
                    <b-card-text>
                        <b-icon icon="file-person-fill"></b-icon
                        >{{ user.full_name }}
                    </b-card-text>
                    <b-card-text>
                        <b-icon icon="envelope-fill"></b-icon>{{ user.email }}
                    </b-card-text>
                    <b-card-text>
                        <b-icon icon="telephone-fill"></b-icon> {{ user.phone }}
                    </b-card-text>
                </b-card>

                <b-card title="User info" style="max-width: 20rem" class="mb-2">
                    <b-card-text>
                        <strong>Company:</strong> {{ user.company | isEmpty }}
                    </b-card-text>
                    <b-card-text>
                        <strong>Birth date:</strong>
                        {{ user.birth_date | isEmpty }}
                    </b-card-text>
                    <b-card-text>
                        <strong>Provider:</strong> {{ user.provider | isEmpty }}
                    </b-card-text>
                    <b-card-text>
                        <strong>Language:</strong> {{ user.language | isEmpty }}
                    </b-card-text>
                </b-card>
            </b-col>

            <b-col cols="8">
                <b-card no-body>
                    <b-tabs pills card>
                        <b-tab title="Overview" active>
                            <b-card class="mb-3">
                                <h4>Information</h4>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quam possimus porro aspernatur
                                ullam praesentium voluptate necessitatibus
                                tenetur? Tempore tempora nostrum eligendi dolor
                                velit nobis cupiditate, repudiandae ea
                                reiciendis suscipit voluptates? Nam illo a
                                praesentium fugiat repellat consectetur. Iure,
                                velit. Veritatis ex magni obcaecati aspernatur
                                velit porro sapiente commodi quas possimus
                                repellendus? Consectetur, eos! Eaque natus
                                quaerat laborum cupiditate, libero quisquam!
                                Rerum eius ea dolores esse ducimus quidem
                                officia omnis assumenda. Mollitia praesentium
                                dolores velit nostrum perferendis, hic et
                                assumenda itaque nulla facilis dolorum explicabo
                                quos maiores nemo est maxime esse?
                            </b-card>

                            <b-card class="mb-3">
                                <h4>Roles</h4>
                                <b-table
                                    striped
                                    hover
                                    :items="user.roles"
                                ></b-table>
                            </b-card>

                            <b-card>
                                <h4>Post</h4>
                                <b-card
                                    footer="Date: 29-02-2012"
                                    footer-tag="footer"
                                    title="Example title"
                                >
                                    <b-card-text
                                        >Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Optio, fugiat laborum
                                        corrupti odit cumque ullam molestiae
                                        rerum fugit veniam aspernatur explicabo
                                        asperiores voluptatum nulla eum quisquam
                                        harum rem iusto
                                        perferendis.</b-card-text
                                    >
                                </b-card>
                            </b-card>
                        </b-tab>
                        <b-tab title="Applications">
                            <h4>Applications</h4>
                            <b-table
                                striped
                                hover
                                :fields="fields"
                                :items="user.applications"
                            ></b-table>
                        </b-tab>

                        <b-tab title="Specialities">
                            <h4>Specialities</h4>
                            <pre>{{ user }}</pre>
                            <b-table
                                striped
                                hover
                                :items="user.specialities | isEmpty"
                            ></b-table>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            fields: [
                {
                    key: "uid",
                },
                {
                    key: "name",
                },
                {
                    key: "uri",
                },
                {
                    key: "description",
                },
                {
                    key: "image",
                },
            ],
        };
    },
};
</script>
