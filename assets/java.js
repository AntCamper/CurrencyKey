
// api providers
const ipdata = {
    key: '13d9f0993aea6e968b26af1deba3e41c0be1ffc8c530c1e3937c9aa7',
    baseurl: 'https://api.ipdata.co',
    currency: function () {
        return '${this.baseurl}/currency?api-key=${this.key}';
    },
};
