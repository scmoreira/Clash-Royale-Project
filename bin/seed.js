const mongoose = require('mongoose')

const Card = require('../models/card.model.js')

mongoose.connect('mongodb://localhost/Clash-royal-project', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

Card.collection.drop()

const cards = [{
        'name': 'Knight',
        'id': 26000000,
        'maxLevel': 13,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png'
        }
    },
    {
        'name': 'Archers',
        'id': 26000001,
        'maxLevel': 13,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/W4Hmp8MTSdXANN8KdblbtHwtsbt0o749BbxNqmJYfA8.png'
        }
    },
    {
        'name': 'Goblins',
        'id': 26000002,
        'maxLevel': 13,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png'
        }
    },
    {
        'name': 'Giant',
        'id': 26000003,
        'maxLevel': 11,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/Axr4ox5_b7edmLsoHxBX3vmgijAIibuF6RImTbqLlXE.png'
        }
    },
    {
        'name': 'P.E.K.K.A',
        'id': 26000004,
        'maxLevel': 8,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/MlArURKhn_zWAZY-Xj1qIRKLVKquarG25BXDjUQajNs.png'
        }
    },
    {
        'name': 'Minions',
        'id': 26000005,
        'maxLevel': 13,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/yHGpoEnmUWPGV_hBbhn-Kk-Bs838OjGzWzJJlQpQKQA.png'
        }
    },
    {
        'name': 'Balloon',
        'id': 26000006,
        'maxLevel': 8,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/qBipxLo-3hhCnPrApp2Nn3b2NgrSrvwzWytvREev0CY.png'
        }
    },
    {
        'name': 'Witch',
        'id': 26000007,
        'maxLevel': 8,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/cfwk1vzehVyHC-uloEIH6NOI0hOdofCutR5PyhIgO6w.png'
        }
    },
    {
        'name': 'Barbarians',
        'id': 26000008,
        'maxLevel': 13,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/TvJsuu2S4yhyk1jVYUAQwdKOnW4U77KuWWOTPOWnwfI.png'
        }
    },
    {
        'name': 'Golem',
        'id': 26000009,
        'maxLevel': 8,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/npdmCnET7jmVjJvjJQkFnNSNnDxYHDBigbvIAloFMds.png'
        }
    },
    {
        'name': 'Skeletons',
        'id': 26000010,
        'maxLevel': 13,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/oO7iKMU5m0cdxhYPZA3nWQiAUh2yoGgdThLWB1rVSec.png'
        }
    },
    {
        'name': 'Valkyrie',
        'id': 26000011,
        'maxLevel': 11,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/0lIoYf3Y_plFTzo95zZL93JVxpfb3MMgFDDhgSDGU9A.png'
        }
    },
    {
        'name': 'Skeleton Army',
        'id': 26000012,
        'maxLevel': 8,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/fAOToOi1pRy7svN2xQS6mDkhQw2pj9m_17FauaNqyl4.png'
        }
    },
    {
        'name': 'Bomber',
        'id': 26000013,
        'maxLevel': 13,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/12n1CesxKIcqVYntjxcF36EFA-ONw7Z-DoL0_rQrbdo.png'
        }
    },
    {
        'name': 'Musketeer',
        'id': 26000014,
        'maxLevel': 11,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/Tex1C48UTq9FKtAX-3tzG0FJmc9jzncUZG3bb5Vf-Ds.png'
        }
    },
    {
        'name': 'Baby Dragon',
        'id': 26000015,
        'maxLevel': 8,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/cjC9n4AvEZJ3urkVh-rwBkJ-aRSsydIMqSAV48hAih0.png'
        }
    },
    {
        'name': 'Prince',
        'id': 26000016,
        'maxLevel': 8,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/3JntJV62aY0G1Qh6LIs-ek-0ayeYFY3VItpG7cb9I60.png'
        }
    },
    {
        'name': 'Wizard',
        'id': 26000017,
        'maxLevel': 11,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/Mej7vnv4H_3p_8qPs_N6_GKahy6HDr7pU7i9eTHS84U.png'
        }
    },
    {
        'name': 'Mini P.E.K.K.A',
        'id': 26000018,
        'maxLevel': 11,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/Fmltc4j3Ve9vO_xhHHPEO3PRP3SmU2oKp2zkZQHRZT4.png'
        }
    },
    {
        'name': 'Spear Goblins',
        'id': 26000019,
        'maxLevel': 13,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/FSDFotjaXidI4ku_WFpVCTWS1hKGnFh1sxX0lxM43_E.png'
        }
    },
    {
        'name': 'Giant Skeleton',
        'id': 26000020,
        'maxLevel': 8,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/0p0gd0XaVRu1Hb1iSG1hTYbz2AN6aEiZnhaAib5O8Z8.png'
        }
    },
    {
        'name': 'Hog Rider',
        'id': 26000021,
        'maxLevel': 11,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/Ubu0oUl8tZkusnkZf8Xv9Vno5IO29Y-jbZ4fhoNJ5oc.png'
        }
    },
    {
        'name': 'Minion Horde',
        'id': 26000022,
        'maxLevel': 13,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/Wyjq5l0IXHTkX9Rmpap6HaH08MvjbxFp1xBO9a47YSI.png'
        }
    },
    {
        'name': 'Ice Wizard',
        'id': 26000023,
        'maxLevel': 5,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/W3dkw0HTw9n1jB-zbknY2w3wHuyuLxSRIAV5fUT1SEY.png'
        }
    },
    {
        'name': 'Royal Giant',
        'id': 26000024,
        'maxLevel': 13,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/mnlRaNtmfpQx2e6mp70sLd0ND-pKPF70Cf87_agEKg4.png'
        }
    },
    {
        'name': 'Guards',
        'id': 26000025,
        'maxLevel': 8,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png'
        }
    },
    {
        'name': 'Princess',
        'id': 26000026,
        'maxLevel': 5,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/bAwMcqp9EKVIKH3ZLm_m0MqZFSG72zG-vKxpx8aKoVs.png'
        }
    },
    {
        'name': 'Dark Prince',
        'id': 26000027,
        'maxLevel': 8,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/M7fXlrKXHu2IvpSGpk36kXVstslbR08Bbxcy0jQcln8.png'
        }
    },
    {
        'name': 'Three Musketeers',
        'id': 26000028,
        'maxLevel': 11,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/_J2GhbkX3vswaFk1wG-dopwiHyNc_YiPhwroiKF3Mek.png'
        }
    },
    {
        'name': 'Lava Hound',
        'id': 26000029,
        'maxLevel': 5,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/unicRQ975sBY2oLtfgZbAI56ZvaWz7azj-vXTLxc0r8.png'
        }
    },
    {
        'name': 'Ice Spirit',
        'id': 26000030,
        'maxLevel': 13,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png'
        }
    },
    {
        'name': 'Fire Spirits',
        'id': 26000031,
        'maxLevel': 13,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/16-BqusVvynIgYI8_Jci3LDC-r8AI_xaIYLgXqtlmS8.png'
        }
    },
    {
        'name': 'Miner',
        'id': 26000032,
        'maxLevel': 5,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png'
        }
    },
    {
        'name': 'Sparky',
        'id': 26000033,
        'maxLevel': 5,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/2GKMkBrArZXgQxf2ygFjDs4VvGYPbx8F6Lj_68iVhIM.png'
        }
    },
    {
        'name': 'Bowler',
        'id': 26000034,
        'maxLevel': 8,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/SU4qFXmbQXWjvASxVI6z9IJuTYolx4A0MKK90sTIE88.png'
        }
    },
    {
        'name': 'Lumberjack',
        'id': 26000035,
        'maxLevel': 5,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/E6RWrnCuk13xMX5OE1EQtLEKTZQV6B78d00y8PlXt6Q.png'
        }
    },
    {
        'name': 'Battle Ram',
        'id': 26000036,
        'maxLevel': 11,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/dyc50V2cplKi4H7pq1B3I36pl_sEH5DQrNHboS_dbbM.png'
        }
    },
    {
        'name': 'Inferno Dragon',
        'id': 26000037,
        'maxLevel': 5,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/y5HDbKtTbWG6En6TGWU0xoVIGs1-iQpIP4HC-VM7u8A.png'
        }
    },
    {
        'name': 'Ice Golem',
        'id': 26000038,
        'maxLevel': 11,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/r05cmpwV1o7i7FHodtZwW3fmjbXCW34IJCsDEV5cZC4.png'
        }
    },
    {
        'name': 'Mega Minion',
        'id': 26000039,
        'maxLevel': 11,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/-T_e4YLbuhPBKbYnBwQfXgynNpp5eOIN_0RracYwL9c.png'
        }
    },
    {
        'name': 'Dart Goblin',
        'id': 26000040,
        'maxLevel': 11,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/BmpK3bqEAviflqHCdxxnfm-_l3pRPJw3qxHkwS55nCY.png'
        }
    },
    {
        'name': 'Goblin Gang',
        'id': 26000041,
        'maxLevel': 13,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png'
        }
    },
    {
        'name': 'Electro Wizard',
        'id': 26000042,
        'maxLevel': 5,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/RsFaHgB3w6vXsTjXdPr3x8l_GbV9TbOUCvIx07prbrQ.png'
        }
    },
    {
        'name': 'Elite Barbarians',
        'id': 26000043,
        'maxLevel': 13,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/C88C5JH_F3lLZj6K-tLcMo5DPjrFmvzIb1R2M6xCfTE.png'
        }
    },
    {
        'name': 'Hunter',
        'id': 26000044,
        'maxLevel': 8,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/VNabB1WKnYtYRSG7X_FZfnZjQDHTBs9A96OGMFmecrA.png'
        }
    },
    {
        'name': 'Executioner',
        'id': 26000045,
        'maxLevel': 8,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/9XL5BP2mqzV8kza6KF8rOxrpCZTyuGLp2l413DTjEoM.png'
        }
    },
    {
        'name': 'Bandit',
        'id': 26000046,
        'maxLevel': 5,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/QWDdXMKJNpv0go-HYaWQWP6p8uIOHjqn-zX7G0p3DyM.png'
        }
    },
    {
        'name': 'Royal Recruits',
        'id': 26000047,
        'maxLevel': 13,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/jcNyYGUiXXNz3kuz8NBkHNKNREQKraXlb_Ts7rhCIdM.png'
        }
    },
    {
        'name': 'Night Witch',
        'id': 26000048,
        'maxLevel': 5,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/NpCrXDEDBBJgNv9QrBAcJmmMFbS7pe3KCY8xJ5VB18A.png'
        }
    },
    {
        'name': 'Bats',
        'id': 26000049,
        'maxLevel': 13,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png'
        }
    },
    {
        'name': 'Royal Ghost',
        'id': 26000050,
        'maxLevel': 5,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png'
        }
    },
    {
        'name': 'Ram Rider',
        'id': 26000051,
        'maxLevel': 5,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/QaJyerT7f7oMyZ3Fv1glKymtLSvx7YUXisAulxl7zRI.png'
        }
    },
    {
        'name': 'Zappies',
        'id': 26000052,
        'maxLevel': 11,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png'
        }
    },
    {
        'name': 'Rascals',
        'id': 26000053,
        'maxLevel': 13,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/KV48DfwVHKx9XCjzBdk3daT_Eb52Me4VgjVO7WctRc4.png'
        }
    },
    {
        'name': 'Cannon Cart',
        'id': 26000054,
        'maxLevel': 8,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/aqwxRz8HXzqlMCO4WMXNA1txynjXTsLinknqsgZLbok.png'
        }
    },
    {
        'name': 'Mega Knight',
        'id': 26000055,
        'maxLevel': 5,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/O2NycChSNhn_UK9nqBXUhhC_lILkiANzPuJjtjoz0CE.png'
        }
    },
    {
        'name': 'Skeleton Barrel',
        'id': 26000056,
        'maxLevel': 13,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/vCB4DWCcrGbTkarjcOiVz4aNDx6GWLm0yUepg9E1MGo.png'
        }
    },
    {
        'name': 'Flying Machine',
        'id': 26000057,
        'maxLevel': 11,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/hzKNE3QwFcrSrDDRuVW3QY_OnrDPijSiIp-PsWgFevE.png'
        }
    },
    {
        'name': 'Wall Breakers',
        'id': 26000058,
        'maxLevel': 8,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/_xPphEfC8eEwFNrfU3cMQG9-f5JaLQ31ARCA7l3XtW4.png'
        }
    },
    {
        'name': 'Royal Hogs',
        'id': 26000059,
        'maxLevel': 11,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/ASSQJG_MoVq9e81HZzo4bynMnyLNpNJMfSLb3hqydOw.png'
        }
    },
    {
        'name': 'Goblin Giant',
        'id': 26000060,
        'maxLevel': 8,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/SoW16cY3jXBwaTDvb39DkqiVsoFVaDWbzf5QBYphJrY.png'
        }
    },
    {
        'name': 'Fisherman',
        'id': 26000061,
        'maxLevel': 5,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/U2KZ3g0wyufcuA5P2Xrn3Z3lr1WiJmc5S0IWOZHgizQ.png'
        }
    },
    {
        'name': 'Magic Archer',
        'id': 26000062,
        'maxLevel': 5,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/Avli3W7BxU9HQ2SoLiXnBgGx25FoNXUSFm7OcAk68ek.png'
        }
    },
    {
        'name': 'Electro Dragon',
        'id': 26000063,
        'maxLevel': 8,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/tN9h6lnMNPCNsx0LMFmvpHgznbDZ1fBRkx-C7UfNmfY.png'
        }
    },
    {
        'name': 'Firecracker',
        'id': 26000064,
        'maxLevel': 13,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/c1rL3LO1U2D9-TkeFfAC18gP3AO8ztSwrcHMZplwL2Q.png'
        }
    },
    {
        'name': 'Elixir Golem',
        'id': 26000067,
        'maxLevel': 11,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/puhMsZjCIqy21HW3hYxjrk_xt8NIPyFqjRy-BeLKZwo.png'
        }
    },
    {
        'name': 'Battle Healer',
        'id': 26000068,
        'maxLevel': 11,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/KdwXcoigS2Kg-cgA7BJJIANbUJG6SNgjetRQ-MegZ08.png'
        }
    },
    {
        'name': 'Skeleton Dragons',
        'id': 26000080,
        'maxLevel': 13,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/qPOtg9uONh47_NLxGhhFc_ww9PlZ6z3Ry507q1NZUXs.png'
        }
    },
    {
        'name': 'Cannon',
        'id': 27000000,
        'maxLevel': 13,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/nZK1y-beLxO5vnlyUhK6-2zH2NzXJwqykcosqQ1cmZ8.png'
        }
    },
    {
        'name': 'Goblin Hut',
        'id': 27000001,
        'maxLevel': 11,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/l8ZdzzNLcwB4u7ihGgxNFQOjCT_njFuAhZr7D6PRF7E.png'
        }
    },
    {
        'name': 'Mortar',
        'id': 27000002,
        'maxLevel': 13,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/lPOSw6H7YOHq2miSCrf7ZDL3ANjhJdPPDYOTujdNrVE.png'
        }
    },
    {
        'name': 'Inferno Tower',
        'id': 27000003,
        'maxLevel': 11,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/GSHY_wrooMMLET6bG_WJB8redtwx66c4i80ipi4gYOM.png'
        }
    },
    {
        'name': 'Bomb Tower',
        'id': 27000004,
        'maxLevel': 11,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/rirYRyHPc97emRjoH-c1O8uZCBzPVnToaGuNGusF3TQ.png'
        }
    },
    {
        'name': 'Barbarian Hut',
        'id': 27000005,
        'maxLevel': 11,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/ho0nOG2y3Ch86elHHcocQs8Fv_QNe0cFJ2CijsxABZA.png'
        }
    },
    {
        'name': 'Tesla',
        'id': 27000006,
        'maxLevel': 13,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/OiwnGrxFMNiHetYEerE-UZt0L_uYNzFY7qV_CA_OxR4.png'
        }
    },
    {
        'name': 'Elixir Collector',
        'id': 27000007,
        'maxLevel': 11,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/BGLo3Grsp81c72EpxLLk-Sofk3VY56zahnUNOv3JcT0.png'
        }
    },
    {
        'name': 'X-Bow',
        'id': 27000008,
        'maxLevel': 8,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/zVQ9Hme1hlj9Dc6e1ORl9xWwglcSrP7ejow5mAhLUJc.png'
        }
    },
    {
        'name': 'Tombstone',
        'id': 27000009,
        'maxLevel': 11,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png'
        }
    },
    {
        'name': 'Furnace',
        'id': 27000010,
        'maxLevel': 11,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/iqbDiG7yYRIzvCPXdt9zPb3IvMt7F7Gi4wIPnh2x4aI.png'
        }
    },
    {
        'name': 'Goblin Cage',
        'id': 27000012,
        'maxLevel': 11,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/vD24bBgK4rSq7wx5QEbuqChtPMRFviL_ep76GwQw1yA.png'
        }
    },
    {
        'name': 'Fireball',
        'id': 28000000,
        'maxLevel': 11,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png'
        }
    },
    {
        'name': 'Arrows',
        'id': 28000001,
        'maxLevel': 13,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/Flsoci-Y6y8ZFVi5uRFTmgkPnCmMyMVrU7YmmuPvSBo.png'
        }
    },
    {
        'name': 'Rage',
        'id': 28000002,
        'maxLevel': 8,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/bGP21OOmcpHMJ5ZA79bHVV2D-NzPtDkvBskCNJb7pg0.png'
        }
    },
    {
        'name': 'Rocket',
        'id': 28000003,
        'maxLevel': 11,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/Ie07nQNK9CjhKOa4-arFAewi4EroqaA-86Xo7r5tx94.png'
        }
    },
    {
        'name': 'Goblin Barrel',
        'id': 28000004,
        'maxLevel': 8,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/CoZdp5PpsTH858l212lAMeJxVJ0zxv9V-f5xC8Bvj5g.png'
        }
    },
    {
        'name': 'Freeze',
        'id': 28000005,
        'maxLevel': 8,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/I1M20_Zs_p_BS1NaNIVQjuMJkYI_1-ePtwYZahn0JXQ.png'
        }
    },
    {
        'name': 'Mirror',
        'id': 28000006,
        'maxLevel': 8,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/wC6Cm9rKLEOk72zTsukVwxewKIoO4ZcMJun54zCPWvA.png'
        }
    },
    {
        'name': 'Lightning',
        'id': 28000007,
        'maxLevel': 8,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/fpnESbYqe5GyZmaVVYe-SEu7tE0Kxh_HZyVigzvLjks.png'
        }
    },
    {
        'name': 'Zap',
        'id': 28000008,
        'maxLevel': 13,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png'
        }
    },
    {
        'name': 'Poison',
        'id': 28000009,
        'maxLevel': 8,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png'
        }
    },
    {
        'name': 'Graveyard',
        'id': 28000010,
        'maxLevel': 5,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png'
        }
    },
    {
        'name': 'The Log',
        'id': 28000011,
        'maxLevel': 5,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png'
        }
    },
    {
        'name': 'Tornado',
        'id': 28000012,
        'maxLevel': 8,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/QJB-QK1QJHdw4hjpAwVSyZBozc2ZWAR9pQ-SMUyKaT0.png'
        }
    },
    {
        'name': 'Clone',
        'id': 28000013,
        'maxLevel': 8,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/mHVCet-1TkwWq-pxVIU2ZWY9_2z7Z7wtP25ArEUsP_g.png'
        }
    },
    {
        'name': 'Earthquake',
        'id': 28000014,
        'maxLevel': 11,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/XeQXcrUu59C52DslyZVwCnbi4yamID-WxfVZLShgZmE.png'
        }
    },
    {
        'name': 'Barbarian Barrel',
        'id': 28000015,
        'maxLevel': 8,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png'
        }
    },
    {
        'name': 'Heal Spirit',
        'id': 28000016,
        'maxLevel': 11,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/GITl06sa2nGRLPvboyXbGEv5E3I-wAwn1Eqa5esggbc.png'
        }
    },
    {
        'name': 'Giant Snowball',
        'id': 28000017,
        'maxLevel': 13,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/7MaJLa6hK9WN2_VIshuh5DIDfGwm0wEv98gXtAxLDPs.png'
        }
    },
    {
        'name': 'Royal Delivery',
        'id': 28000018,
        'maxLevel': 13,
        'iconUrls': {
            'medium': 'https://api-assets.clashroyale.com/cards/300/LPg7AGjGI3_xmi7gLLgGC50yKM1jJ2teWkZfoHJcIZo.png'
        }
    }
]

Card.create(cards)
    .then(allCards => console.log(allCards.length, 'cards have been created'))
    .then(() => mongoose.connection.close())
    .catch(err => console.log(err))


