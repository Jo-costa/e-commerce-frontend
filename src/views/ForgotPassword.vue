<template>
    <Layout>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6 mb-10" action="#" method="POST">
                <div>
                    <label for="new-password" class="block text-sm font-medium leading-6
                          text-gray-900">New
                        password</label>
                    <div class="mt-2">
                        <input id="new-password" name="password" type="password" required="" class="block w-full 
                                  rounded-md border-0 py-1.5
                                  text-gray-900 shadow-sm ring-1
                                  ring-inset ring-gray-300 placeholder:text-gray-400
                                  focus:ring-2 focus:ring-inset focus:ring-green-600 
                                  sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <label for="re-password" class="block text-sm font-medium leading-6 text-gray-900">Re-enter new
                        password</label>
                    <div class="mt-2">
                        <input id="re-password" name="re-password" type="password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                                  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                  focus:ring-green-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <button type="submit" class="flex w-full
                          justify-center rounded-md mb-10
                          bg-green-600 px-3 py-1.5
                          text-sm font-semibold leading-6
                          text-white shadow-sm hover:bg-green-500
                          focus-visible:outline focus-visible:outline-2
                          focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Reset password</button>
                </div>
            </form>
        </div>
    </Layout>
</template>

<script>
import Layout from '../components/Layout.vue';
</script>