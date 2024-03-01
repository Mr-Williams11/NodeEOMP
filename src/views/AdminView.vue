<template>
    <div class="container">
        <div class="row">
            <h2 class="display-4">Users</h2>
        </div>
        <div class="row">
            <div class="col">
                <button class="btn btn-success" @click="addUser()">Add</button>
            </div>
        </div>
        <div class="row">
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>User age</th>
                        <th>Gender</th>
                        <th>Email address</th>
                        <th>User role</th>
                        <th>UserPass</th>
                        <th>UserProfile</th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody v-if="users">
                    <tr v-for="user in users" :key="user.userID">
                        <td>
                            {{ user.userID }}
                        </td>
                        <td>
                            {{ user.firstName }}
                        </td>
                        <td>
                            {{ user.lastName }}
                        </td>
                        <td>
                            {{ user.userAge }}
                        </td>
                        <td>
                            {{ user.Gender }}
                        </td>
                        <td>
                            {{ user.emailAdd }}
                        </td>
                        <td>
                            {{ user.userRole }}
                        </td>
                        <td>
                            {{ user.userPass }}
                        </td>
                        <td>
                            {{ user.userProfile }}
                        </td>
                        <td class="d-flex justify-content-between">
                            <button class="btn btn-success" @click="editUser(user)">Edit</button>
                            <button class="btn btn-success" @click="deleteUser(user)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        <div class="row">

            <h2 class="display-4">Products</h2>
        </div>
        <div class="row">
            <div class="col">
                <button class="btn btn-success" @click="addUser()">Add</button>
            </div>
        </div>
        <div class="row">
            <table>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Quantity</th>
                        <th>Product Amount</th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody v-if="products">
                    <tr v-for="product in products" :key="product.prodID">
                        <td>
                            {{ product.prodID }}
                        </td>
                        <td>
                            {{ product.prodName }}
                        </td>
                        <td>
                            {{ product.quantity }}
                        </td>
                        <td>
                            R {{ product.amount }}
                        </td>
                        <td class="d-flex justify-content-between">
                            <button class="btn btn-success" @click="addProduct">Add</button>
                            <button class="btn btn-success" @click="deleteProduct(product)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        users() {
            return this.$store.state.users
        },
        products() {
            return this.$store.state.products
        }
    },
    mounted() {
        this.$store.dispatch('fetchUsers')
        this.$store.dispatch('fetchProducts')
    },
    methods: {
        // Method to add a new user
        addUser() {
            this.$store.dispatch('addUser', this.$data);
        },
        // Method to edit a user
        editUser(user) {
            this.$store.dispatch('editUser', user.editedUser);
        },
        // Method to delete a user
        deleteUser(user) {
            this.$store.dispatch('deleteUser', user.userID);
        },
        addProduct(product) {
            this.$store.dispatch('addProduct', product.newProduct);
        },
        // Method to edit a user
        editProduct(product) {
            this.$store.dispatch('editProduct', product.editedProduct);
        },
        // Method to delete a user
        deleteProduct(product) {
            this.$store.dispatch('deleteProduct', product.prodID);
        },
        // Similar methods for products
    }
}
</script>

<style></style>