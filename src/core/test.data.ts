export const styleValues = [
    {
        name: "Same as default",
        input: {
            height: "400px",
            backgroundColor: "white",
            fontFamily: "Verdana, Arial, Helvetica, sans-serif",
            textColor: "black",
            disableNumbers: false,
        },
        expected: {
            height: "400px",
            backgroundColor: "white",
            fontFamily: "Verdana, Arial, Helvetica, sans-serif",
            textColor: "black",
            disableNumbers: false,
        }
    },
    {
        name: "Empty data",
        input: {},
        expected: {
            height: "400px",
            backgroundColor: "white",
            fontFamily: "Verdana, Arial, Helvetica, sans-serif",
            textColor: "black",
            disableNumbers: false,
        }
    },
    {
        name: "Changed height and textColor",
        input: {
            height: "100px",
            textColor: "pink",
        },
        expected: {
            height: "100px",
            backgroundColor: "white",
            fontFamily: "Verdana, Arial, Helvetica, sans-serif",
            textColor: "pink",
            disableNumbers: false,
        }
    },
]

export const questions = {
    data: [
        {
            "text": "2 + 4",
            "answers": [
                "4",
                "6",
                "9",
                "10"
            ],
            "correctAnswer": "6"
        }
    ],
    result: [
        {
            "text": "2 + 4",
            "answers": [
                {
                    "id": "l97o7dmj",
                    "label": "4"
                },
                {
                    "id": "l97o7dmh",
                    "label": "6"
                },
                {
                    "id": "l97o7dmk",
                    "label": "9"
                },
                {
                    "id": "l97o7dml",
                    "label": "10"
                }
            ],
            "correctAnswer": {
                "id": "l97o7dmh",
                "label": "6"
            },
            "id": "l97o7dmi",
            "cost": 0
        }
    ]
}

export const answers = {
    data: {
        answers: [
            {
                "qid": "l97o7dmi",
                "aid": "l97o7dmh"
            }
        ],
        preparedQuestions: [
            {
                "text": "2 + 4",
                "answers": [
                    {
                        "id": "l97o7dmj",
                        "label": "4"
                    },
                    {
                        "id": "l97o7dmh",
                        "label": "6"
                    },
                    {
                        "id": "l97o7dmk",
                        "label": "9"
                    },
                    {
                        "id": "l97o7dml",
                        "label": "10"
                    }
                ],
                "correctAnswer": {
                    "id": "l97o7dmh",
                    "label": "6"
                },
                "id": "l97o7dmi",
                "cost": 0
            },
            {
                "text": "3 + 2",
                "answers": [
                    {
                        "id": "l97o7dmo",
                        "label": "3"
                    },
                    {
                        "id": "l97o7dmm",
                        "label": "5"
                    },
                    {
                        "id": "l97o7dmp",
                        "label": "2"
                    },
                    {
                        "id": "l97o7dmq",
                        "label": "1"
                    }
                ],
                "correctAnswer": {
                    "id": "l97o7dmm",
                    "label": "5"
                },
                "id": "l97o7dmn",
                "cost": 0
            },
            {
                "text": "1 + 7",
                "answers": [
                    {
                        "id": "l97o7dmt",
                        "label": "9"
                    },
                    {
                        "id": "l97o7dmu",
                        "label": "6"
                    },
                    {
                        "id": "l97o7dmv",
                        "label": "5"
                    },
                    {
                        "id": "l97o7dmr",
                        "label": "8"
                    }
                ],
                "correctAnswer": {
                    "id": "l97o7dmr",
                    "label": "8"
                },
                "id": "l97o7dms",
                "cost": 0
            },
            {
                "text": "6 + 1",
                "answers": [
                    {
                        "id": "l97o7dmy",
                        "label": "1"
                    },
                    {
                        "id": "l97o7dmw",
                        "label": "7"
                    },
                    {
                        "id": "l97o7dmz",
                        "label": "4"
                    },
                    {
                        "id": "l97o7dn0",
                        "label": "0"
                    }
                ],
                "correctAnswer": {
                    "id": "l97o7dmw",
                    "label": "7"
                },
                "id": "l97o7dmx",
                "cost": 0
            },
            {
                "text": "8 + 2",
                "answers": [
                    {
                        "id": "l97o7dn1",
                        "label": "10"
                    },
                    {
                        "id": "l97o7dn3",
                        "label": "4"
                    },
                    {
                        "id": "l97o7dn4",
                        "label": "8"
                    },
                    {
                        "id": "l97o7dn5",
                        "label": "2"
                    }
                ],
                "correctAnswer": {
                    "id": "l97o7dn1",
                    "label": "10"
                },
                "id": "l97o7dn2",
                "cost": 0
            }
        ]
    },
    result: {
        "answers": [
            {
                "text": "2 + 4",
                "correctAnswer": {
                    "id": "l97o7dmh",
                    "label": "6"
                },
                "id": "l97o7dmi",
                "cost": 0,
                "answer": {
                    "qid": "l97o7dmi",
                    "aid": "l97o7dmh"
                },
                "correct": true
            }
        ],
        "score": {
            "scoredNumber": 1,
            "scoredCost": 0,
            "correctPercentage": "20%",
            "costPercentage": "100%",
            "correctOutOf": "1/5",
            "costOutOf": "0/0"
        }
    }
}

export const scores = [
    {
        name: "2/4 correct",
        input: {
            preparedAnswers: [
                {
                    "text": "2 + 4",
                    "id": "1",
                    "cost": 10,
                    "answer": {
                        "qid": "1",
                        "aid": "6"
                    },
                    "correct": true
                },
                {
                    "text": "2 + 4",
                    "id": "2",
                    "cost": 10,
                    "answer": {
                        "qid": "2",
                        "aid": "6"
                    },
                    "correct": true
                },
                {
                    "text": "2 + 4",
                    "id": "3",
                    "cost": 10,
                    "answer": {
                        "qid": "3",
                        "aid": "1"
                    },
                    "correct": false
                },
                {
                    "text": "2 + 4",
                    "id": "4",
                    "cost": 15,
                    "answer": {
                        "qid": "4",
                        "aid": "1"
                    },
                    "correct": false
                }
            ],
            preparedQuestions: [
                {
                    "text": "2 + 4",
                    "answers": [
                        {
                            "id": "6",
                            "label": "6"
                        },
                        {
                            "id": "2",
                            "label": "2"
                        },
                        {
                            "id": "1",
                            "label": "1"
                        },
                        {
                            "id": "-2",
                            "label": "-2"
                        }
                    ],
                    "id": "1",
                    "cost": 10
                },
                {
                    "text": "2 + 4",
                    "answers": [
                        {
                            "id": "6",
                            "label": "6"
                        },
                        {
                            "id": "2",
                            "label": "2"
                        },
                        {
                            "id": "1",
                            "label": "1"
                        },
                        {
                            "id": "-2",
                            "label": "-2"
                        }
                    ],
                    "id": "2",
                    "cost": 10
                },
                {
                    "text": "2 + 4",
                    "answers": [
                        {
                            "id": "6",
                            "label": "6"
                        },
                        {
                            "id": "2",
                            "label": "2"
                        },
                        {
                            "id": "1",
                            "label": "1"
                        },
                        {
                            "id": "-2",
                            "label": "-2"
                        }
                    ],
                    "id": "3",
                    "cost": 10
                },
                {
                    "text": "2 + 4",
                    "answers": [
                        {
                            "id": "6",
                            "label": "6"
                        },
                        {
                            "id": "2",
                            "label": "2"
                        },
                        {
                            "id": "1",
                            "label": "1"
                        },
                        {
                            "id": "-2",
                            "label": "-2"
                        }
                    ],
                    "id": "4",
                    "cost": 15
                }
            ]
        },
        expected: {
            "scoredNumber": 2,
            "scoredCost": 20,
            "correctPercentage": "50%",
            "costPercentage": "44%",
            "correctOutOf": "2/4",
            "costOutOf": "20/45"
        }
    }
]