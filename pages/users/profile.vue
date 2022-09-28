<template>
  <b-container>
    <b-row class="mt-3">
      <b-col>
        <b-card style="max-width: 20rem;" class="mb-2" body-class="d-flex flex-column align-items-center">
          <div><img class="w-100 position-relative"
              src="https://img.freepik.com/foto-gratis/textura-pared-estuco-azul-marino-relieve-decorativo-abstracto-grunge-fondo-color-rugoso-gran-angular_1258-28311.jpg?w=2000"
              alt=""></div>
          <div>
            <b-avatar size="8rem" variant="dark" :text="user.initials" class="align-baseline"></b-avatar>
          </div>
          <div>
            {{user.name}} - {{user.company}}
          </div>
        </b-card>

        <b-card title="User info" style="max-width: 20rem;" class="mb-2">
          <b-card-text>
            <b-icon icon="file-person-fill"></b-icon>{{user.full_name}}
          </b-card-text>
          <b-card-text>
            <b-icon icon="envelope-fill"></b-icon>{{user.email}}
          </b-card-text>
          <b-card-text>
            <b-icon icon="telephone-fill"></b-icon> {{user.phone}}
          </b-card-text>
        </b-card>
      </b-col>

      <b-col cols="8">
        <b-card no-body>
          <b-tabs pills card>
            <b-tab title="Overview" active>
              <b-card class="mb-3">
                <h4>Information</h4> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam possimus porro
                aspernatur ullam praesentium voluptate necessitatibus tenetur? Tempore tempora nostrum eligendi dolor
                velit nobis cupiditate, repudiandae ea reiciendis suscipit voluptates?
                Nam illo a praesentium fugiat repellat consectetur. Iure, velit. Veritatis ex magni obcaecati
                aspernatur velit porro sapiente commodi quas possimus repellendus? Consectetur, eos! Eaque natus
                quaerat laborum cupiditate, libero quisquam!
                Rerum eius ea dolores esse ducimus quidem officia omnis assumenda. Mollitia praesentium dolores velit
                nostrum perferendis, hic et assumenda itaque nulla facilis dolorum explicabo quos maiores nemo est
                maxime esse?
              </b-card>

              <b-card class="mb-3">
                <h4>Roles</h4>
                <b-table striped hover :items="user.roles"></b-table>
              </b-card>

              <b-card>
                <h4>Post</h4>
                <b-card footer="Date:" footer-tag="footer" title="Example title">
                  <b-card-text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, fugiat laborum corrupti
                    odit cumque ullam molestiae rerum fugit veniam aspernatur explicabo asperiores voluptatum nulla eum
                    quisquam harum rem iusto perferendis.</b-card-text>
                </b-card>
              </b-card>
            </b-tab>
            <b-tab title="Applications">
              <h4>Applications</h4>
              <b-table striped hover :items="user.applications"></b-table>
            </b-tab>

          </b-tabs>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
