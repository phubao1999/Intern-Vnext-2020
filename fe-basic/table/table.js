const data = [
    {
        id: "1",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x869770983877329f337b19dbc319959e51afec1a",
        amount: 20000,
        transaction_fee: 20,
        note: "",
        time: "2020-05-04 11:29"
    },
    {
        id: "2",
        status: "Confirmed",
        from: "0xb6e687887e7af54dca5810baa6b2ec8d45ddaa36",
        to: "0x3a346598f382a11889ba3df2f3340104a5982008",
        amount: 2500000,
        transaction_fee: 50,
        note: "",
        time: "2020-04-29 20:04"
    },
    {
        id: "3",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x50b3e3dd6abe7b6b7e4faf4fbedc790f075df18f",
        amount: 4000,
        transaction_fee: 30,
        note: "",
        time: "2020-04-28 13:20"
    },
    {
        id: "4",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x50b3e3dd6abe7b6b7e4faf4fbedc790f075df18f",
        amount: 15000,
        transaction_fee: 20,
        note: "",
        time: "2020-04-28 13:05"
    },
    {
        id: "5",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x99181faf837cce92ebed158f012bbda204719ad7",
        amount: 20000,
        transaction_fee: 20,
        note: "",
        time: "2020-03-27 12:56"
    },
    {
        id: "6",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x869770983877329f337b19dbc319959e51afec1a",
        amount: 100000,
        transaction_fee: 30,
        note: "",
        time: "2020-03-27 11:30"
    },
    {
        id: "7",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x869770983877329f337b19dbc319959e51afec1a",
        amount: 50000,
        transaction_fee: 30,
        note: "",
        time: "2020-03-27 11:23"
    },
    {
        id: "8",
        status: "Confirmed",
        from: "0x687422eea2cb73b5d3e242ba5456b782919afc85",
        to: "0x3a346598f382a11889ba3df2f3340104a5982008",
        amount: 100000,
        transaction_fee: 30,
        note: "",
        time: "2020-03-27 11:14"
    },
    {
        id: "9",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x869770983877329f337b19dbc319959e51afec1a",
        amount: 100000,
        transaction_fee: 20,
        note: "",
        time: "2020-02-27 11:06"
    },
    {
        id: "10",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x869770983877329f337b19dbc319959e51afec1a",
        amount: 100000,
        transaction_fee: 30,
        note: "",
        time: "2020-02-26 10:57"
    },
    {
        id: "11",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x869770983877329f337b19dbc319959e51afec1a",
        amount: 10000,
        transaction_fee: 10,
        note: "",
        time: "2020-02-26 10:48"
    },
    {
        id: "12",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x2f6f29b89e833b68e5172ef856303df442415c61",
        amount: 31000,
        transaction_fee: 20,
        note: "",
        time: "2020-01-11 17:36"
    },
    {
        id: "13",
        status: "Confirmed",
        from: "0x50b3e3dd6abe7b6b7e4faf4fbedc790f075df18f",
        to: "0x8ac7bdb1cf548773cfaa175928366fda03e4e6fd",
        amount: 1000,
        transaction_fee: 10,
        note: "",
        time: "2020-01-10 12:17"
    },
    {
        id: "14",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x50b3e3dd6abe7b6b7e4faf4fbedc790f075df18f",
        amount: 135000,
        transaction_fee: 30,
        note: "",
        time: "2020-01-07 11:15"
    }
];

const addValue = json => {
    const arr = [];
    for (let i in json) {
        arr.push(json[i]);
    }
    return arr;
}

// $(document).ready(function () {
//     $("#table").scroll(function () {
//         const data = document.querySelectorAll('.d-none');
//         const table = document.getElementById('table');
//         if (table.scrollTop + table.offsetHeight === table.scrollHeight) {
//             data.forEach(i => {
//                 setTimeout(() => {
//                     i.classList.remove('d-none');
//                 }, 1000)
//             })
//         }
//     });
//     $('.info').click(function () {
//         console.log('aaa');
//     })
// });

const convertDate = (date, option) => {
    const timeStamp = Date.parse(date);
    const a = new Date(timeStamp);
    if (option === 0) {
        const year = a.getFullYear();
        const month = a.getMonth() + 1;
        const day = a.getDay();
        return `${year}/${month}`;
    } else {
        const hh = a.getHours();
        const mm = a.getMinutes();
        if (hh > 12) {
            return `${hh}:${mm} PM`;
        } else {
            return `${hh}:${mm} AM`;
        }
    }
}

const formatCurrency = number => {
    const format = number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    return `¥ ${format}`;
}

const renderTable = data => {
    return new Promise((resolve, reject) => {
        if (data.length == 0) {
            reject('There Is No Data');
        } else {
            const tBody = document.getElementsByTagName('tbody')[0];
            const result = [...data];
            result.forEach(i => {
                let row = `<tr>
                    <td class="month">${convertDate(i.time, 0)}</td>
                    <td>${convertDate(i.time, 1)}</td>
                    <td>${formatCurrency(i.amount)}</td>
                    <td>${i.transaction_fee}</td>
                    <td>${i.status}</td>
                    <td>${i.note}</td>
                        </tr>`;
                tBody.innerHTML += row;
            });
            resolve('Done Step 1');
        }
    })
}

const changeTable = () => {
    return new Promise(() => {
        console.log('Step 2');
    });
}

const run = async () => {
    await renderTable(data).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });
    await changeTable();
}

run();