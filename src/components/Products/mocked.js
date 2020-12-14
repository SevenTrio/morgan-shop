const products = [
    {
        id: "47bf8934-3c7e-472d-ac30-4f5c0856c021",
        categoryId: "dc4437c1-364b-4ba5-992a-15f55ca2d8eb",
        name: "Sunset",
        alias: "sunset",
        price: "480",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2018-06-10T21:22:04.100Z"
    },
    {
        id: "7791a102-2f58-4a42-9479-263cc9e564ee",
        categoryId: "dc4437c1-364b-4ba5-992a-15f55ca2d8eb",
        name: "28 Cluster",
        alias: "28-cluster",
        price: "500",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2014-04-28T07:46:02.127Z"
    },
    {
        id: "77f6bc56-8f1d-4e69-af43-bdd62ee99c77",
        categoryId: "dc4437c1-364b-4ba5-992a-15f55ca2d8eb",
        name: "Dear Ingo",
        alias: "dear-ingo",
        price: "350",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2012-09-15T12:49:10.659Z"
    },
    {
        id: "83a3054b-c6cf-4f65-9c84-5bc8247fcceb",
        categoryId: "dc4437c1-364b-4ba5-992a-15f55ca2d8eb",
        name: "NR2",
        alias: "nr2",
        price: "180",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2013-06-26T16:55:10.904Z"
    },
    {
        id: "7473ec78-0746-4ff9-97d7-7b2d392a73c5",
        categoryId: "dc4437c1-364b-4ba5-992a-15f55ca2d8eb",
        name: "28 Armature",
        alias: "28-armature",
        price: "480",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2014-05-11T09:51:00.416Z"
    },
    {
        id: "e6623a51-b235-4282-901a-60e329ae5415",
        categoryId: "dc4437c1-364b-4ba5-992a-15f55ca2d8eb",
        name: "G1",
        alias: "g1",
        price: "200",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2020-10-12T09:22:22.137Z"
    },
    {
        id: "8e6e2c18-20c6-4bd1-9c0a-dcffe5ed90d1",
        categoryId: "dc4437c1-364b-4ba5-992a-15f55ca2d8eb",
        name: "Raimond",
        alias: "raimond",
        price: "275",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2012-08-17T10:06:20.041Z"
    },
    {
        id: "1221e6a2-29e9-4e83-b77d-cf41124569dd",
        categoryId: "dc4437c1-364b-4ba5-992a-15f55ca2d8eb",
        name: "Softspot",
        alias: "softspot",
        price: "150",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2013-01-04T07:48:50.988Z"
    },
    {
        id: "6ce8effc-f2c6-4d24-93a9-ef96e7f075cf",
        categoryId: "dc4437c1-364b-4ba5-992a-15f55ca2d8eb",
        name: "Tinkering",
        alias: "tinkering",
        price: "480",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2017-07-22T06:01:22.735Z"
    },
    {
        id: "5b66a352-b19e-4137-9d0c-42607e57e0fa",
        categoryId: "dc4437c1-364b-4ba5-992a-15f55ca2d8eb",
        name: "Hemel",
        alias: "hemel",
        price: "500",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2019-11-17T10:29:59.536Z"
    },
    {
        id: "589fee1e-b5ce-4776-a1db-f359c4c67c2f",
        categoryId: "dc4437c1-364b-4ba5-992a-15f55ca2d8eb",
        name: "Heracleum",
        alias: "heracleum",
        price: "350",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2016-03-14T13:44:32.892Z"
    },
    {
        id: "cfc4c394-f545-401f-bb64-7855bc6935ee",
        categoryId: "dc4437c1-364b-4ba5-992a-15f55ca2d8eb",
        name: "Trevi",
        alias: "trevi",
        price: "180",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2020-08-28T22:00:55.781Z"
    },
    {
        id: "6ff95096-a60c-489e-ab1a-771997dfd49d",
        categoryId: "66ef32ef-03ad-48c2-b295-bdfc018b5881",
        name: "Double Shade",
        alias: "double-shade",
        price: "325",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2019-02-07T13:31:01.298Z"
    },
    {
        id: "6920a19d-513a-4db0-a76d-cc45546bdd0d",
        categoryId: "66ef32ef-03ad-48c2-b295-bdfc018b5881",
        name: "T-lamp",
        alias: "t-lamp",
        price: "205",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2019-05-20T18:54:36.624Z"
    },
    {
        id: "3f695527-7382-4a5c-b905-5ba8b719b31f",
        categoryId: "66ef32ef-03ad-48c2-b295-bdfc018b5881",
        name: "G30",
        alias: "g30",
        price: "350",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2014-12-05T08:01:37.014Z"
    },
    {
        id: "2bde31d9-9d14-4b0a-b023-9df292ad0eab",
        categoryId: "66ef32ef-03ad-48c2-b295-bdfc018b5881",
        name: "Lektor Floor",
        alias: "lektor-floor",
        price: "150",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2014-09-12T03:27:15.178Z"
    },
    {
        id: "de6ea2f7-5487-4b4a-a1ca-23799ff2c484",
        categoryId: "66ef32ef-03ad-48c2-b295-bdfc018b5881",
        name: "Nr2 Floor",
        alias: "nr2-floor",
        price: "355",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2014-11-12T04:57:26.327Z"
    },
    {
        id: "91ae9926-efe6-46ca-97ea-9dfc897e6505",
        categoryId: "66ef32ef-03ad-48c2-b295-bdfc018b5881",
        name: "Miller Floor",
        alias: "miller-floor",
        price: "275",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2017-04-19T17:28:10.050Z"
    },
    {
        id: "1d78814f-8f33-4df1-b021-bcec1ef81e1e",
        categoryId: "66ef32ef-03ad-48c2-b295-bdfc018b5881",
        name: "Filigree",
        alias: "filigree",
        price: "520",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2014-03-14T13:15:58.615Z"
    },
    {
        id: "3ea0b31f-bba9-49a3-866c-5bcb468cd604",
        categoryId: "66ef32ef-03ad-48c2-b295-bdfc018b5881",
        name: "Prop Light Floor",
        alias: "prop-light-floor",
        price: "550",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2014-08-09T21:04:12.248Z"
    },
    {
        id: "ba62a12c-5455-43d5-87d8-11baa5b12be4",
        categoryId: "f6e7591c-6743-432d-992b-c3bff746848d",
        name: "Borgo",
        alias: "borgo",
        price: "95",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2017-10-23T23:57:08.206Z"
    },
    {
        id: "7e2a8b67-b7c8-49f6-8576-cb20499b7567",
        categoryId: "f6e7591c-6743-432d-992b-c3bff746848d",
        name: "Montur",
        alias: "montur",
        price: "105",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2018-08-22T11:31:57.000Z"
    },
    {
        id: "c3cf8517-8902-4b98-8d1c-31d7ddae5e99",
        categoryId: "f6e7591c-6743-432d-992b-c3bff746848d",
        name: "Kix W",
        alias: "kix-w",
        price: "70",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2015-01-15T14:38:25.785Z"
    },
    {
        id: "d387b192-15fb-47ab-ad72-3c9fffc559ba",
        categoryId: "f6e7591c-6743-432d-992b-c3bff746848d",
        name: "Logical L",
        alias: "logical-l",
        price: "75",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2014-02-05T16:53:33.438Z"
    },
    {
        id: "488d4937-c43d-407b-80ca-82dc4f75ea03",
        categoryId: "f6e7591c-6743-432d-992b-c3bff746848d",
        name: "Heli X",
        alias: "heli-x",
        price: "80",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2012-05-20T14:35:30.185Z"
    },
    {
        id: "432119cf-168b-4617-a51a-189d374030b4",
        categoryId: "f6e7591c-6743-432d-992b-c3bff746848d",
        name: "Loggia",
        alias: "loggia",
        price: "85",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2014-05-16T00:43:39.087Z"
    },
    {
        id: "1f4c7ba9-86eb-4f16-a5be-65758a3693b7",
        categoryId: "f6e7591c-6743-432d-992b-c3bff746848d",
        name: "Frax",
        alias: "frax",
        price: "50",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2018-04-12T21:09:05.438Z"
    },
    {
        id: "b9818ee7-3af1-4f92-af1d-4c1e774045df",
        categoryId: "f6e7591c-6743-432d-992b-c3bff746848d",
        name: "Logic S",
        alias: "logic-s",
        price: "60",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2017-09-02T05:57:30.936Z"
    },
    {
        id: "84de0bba-b5f5-4021-89a5-ec60b51465f9",
        categoryId: "f6e7591c-6743-432d-992b-c3bff746848d",
        name: "Lanterne",
        alias: "lanterne",
        price: "110",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2018-11-27T14:55:02.422Z"
    },
    {
        id: "687bd3d3-0a7b-472b-8171-1fe5b768abf4",
        categoryId: "f6e7591c-6743-432d-992b-c3bff746848d",
        name: "Carree X Led",
        alias: "carree-x-led",
        price: "60",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2013-10-01T17:31:06.474Z"
    },
    {
        id: "fd1de975-8a70-4e50-8c74-8a7cecc79ae8",
        categoryId: "f6e7591c-6743-432d-992b-c3bff746848d",
        name: "Montur",
        alias: "montur",
        price: "75",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2019-07-26T23:14:25.898Z"
    },
    {
        id: "9f0b19eb-55ce-426d-8c7c-a8b676a782ff",
        categoryId: "f6e7591c-6743-432d-992b-c3bff746848d",
        name: "B-liner B 65ip",
        alias: "b-liner-b-65ip",
        price: "105",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2013-04-08T12:51:02.864Z"
    },
    {
        id: "d492d404-b4f8-446f-890e-ba9c63f15267",
        categoryId: "f95e6ae1-a4bd-44d5-917d-7015f6cdd592",
        name: "Tribe Table",
        alias: "tribe-table",
        price: "90",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2013-06-06T13:50:14.921Z"
    },
    {
        id: "5fddf582-3eb8-46de-a497-d5ccd9ba83ad",
        categoryId: "f95e6ae1-a4bd-44d5-917d-7015f6cdd592",
        name: "Orbita",
        alias: "orbita",
        price: "120",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2014-05-22T14:57:12.025Z"
    },
    {
        id: "a89b050f-2a69-4875-b57f-d1a9b6d9bf16",
        categoryId: "f95e6ae1-a4bd-44d5-917d-7015f6cdd592",
        name: "Rabbit Lamp",
        alias: "rabbit-lamp",
        price: "210",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2016-02-07T12:58:17.353Z"
    },
    {
        id: "9a02dd55-0338-4f28-ab78-7b44a9b02886",
        categoryId: "f95e6ae1-a4bd-44d5-917d-7015f6cdd592",
        name: "Miller Table",
        alias: "miller-table",
        price: "110",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2016-08-07T19:04:56.509Z"
    },
    {
        id: "b99a4abe-b16c-4fe8-a037-f06432b05ee6",
        categoryId: "f95e6ae1-a4bd-44d5-917d-7015f6cdd592",
        name: "Bloom",
        alias: "bloom",
        price: "190",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2020-07-04T20:25:34.187Z"
    },
    {
        id: "c359463f-f660-4141-956a-790146bece3f",
        categoryId: "f95e6ae1-a4bd-44d5-917d-7015f6cdd592",
        name: "Jb One",
        alias: "jb-one",
        price: "110",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2017-05-03T21:30:48.777Z"
    },
    {
        id: "c8ca2bef-8472-4b58-9ccb-6a92de1f7c1d",
        categoryId: "f95e6ae1-a4bd-44d5-917d-7015f6cdd592",
        name: "G24",
        alias: "g24",
        price: "125",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2020-02-12T06:01:55.086Z"
    },
    {
        id: "2d1b4b0b-049c-44e9-bb39-e73a0011cf2b",
        categoryId: "f95e6ae1-a4bd-44d5-917d-7015f6cdd592",
        name: "Quadra New Ta",
        alias: "quadra-new-ta",
        price: "105",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2020-09-13T01:39:37.370Z"
    },
    {
        id: "f80a8a17-1c15-4690-b114-5d32e67f3cdb",
        categoryId: "f95e6ae1-a4bd-44d5-917d-7015f6cdd592",
        name: "Lector Table",
        alias: "lector-table",
        price: "120",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2012-07-20T22:07:25.673Z"
    },
    {
        id: "c55d3968-7071-42fc-aa69-b4459d279238",
        categoryId: "f95e6ae1-a4bd-44d5-917d-7015f6cdd592",
        name: "G60",
        alias: "g-60",
        price: "150",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2017-07-18T17:02:30.257Z"
    },
    {
        id: "1088b10a-3eff-45fb-a91b-0b560372381f",
        categoryId: "f95e6ae1-a4bd-44d5-917d-7015f6cdd592",
        name: "Joey Spot",
        alias: "joey-spot",
        price: "130",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2017-10-03T05:44:18.474Z"
    },
    {
        id: "37d3c94b-9ec4-43ab-889d-05d0d6212954",
        categoryId: "f95e6ae1-a4bd-44d5-917d-7015f6cdd592",
        name: "Imbuto",
        alias: "imbuto",
        price: "95",
        image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
        timeStamp: "2014-12-21T19:01:04.380Z"
    }
];

export default products;