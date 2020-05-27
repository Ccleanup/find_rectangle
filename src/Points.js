import React from 'react'

const points = {
    p1: { id: '1', x: '-3', y: '3' },
    p2: { id: '2', x: '3', y: '3' },
    p3: { id: '3', x: '-6', y: '0' },
    p4: { id: '4', x: '0', y: '0' },
    p5: { id: '5', x: '3', y: '0' },
    p6: { id: '6', x: '-3', y: '-3' },
    p7: { id: '7', x: '0', y: '-3' },
    p8: { id: '8', x: '3', y: '-3' }
}

const Points = () => {
    const all_points = Object.keys(points).map((p, i) => {
        return (
            <div>this is point - {p} with id: {points[p].id}, x: {points[p].x}, y: {points[p].y}</div>
        )
    })

    const arrIds = Object.keys(points).map((p, i) => points[p].id)
    let arr4combs =[]
    let arr4comb1 = []
    let arr4comb2 = []
    let arr4comb3 = []
    for (let i=0; i < arrIds.length-3; i++) {                           // eg [1,2,3,4,5,6,7,8]
        //arr4comb1 = arrIds.slice(i, i+1)
        for (let j=0; j < arrIds.length-i-3; j++) {                     // when i=0, j=1
            arr4comb1 = arrIds.slice(i, i+1)                            // [1]
            arr4comb1 = arr4comb1.concat(arrIds.slice(i+j+1, i+j+4))    // [1] + [3,4,5]

            arr4comb2 = arrIds.slice(i, i+2)                            // [1,2]
            arr4comb2 = arr4comb2.concat(arrIds.slice(i+j+2, i+j+4))    // [1,2] + [4,5]

            arr4comb3 = arrIds.slice(i, i+3)                            // [1,2,3]
            arr4comb3 = arr4comb3.concat(arrIds.slice(i+j+3, i+j+4))    // [1,2,3] + [5]

            if (j === 0) {
                arr4combs.push(arr4comb1)
            } else {
                arr4combs.push(arr4comb1)                               // [1,3,4,5]
                arr4combs.push(arr4comb2)                               // [1,2,4,5]
                arr4combs.push(arr4comb3)                               // [1,2,3,5]
            }
        }
    }

    const sortArrCombs = arr4combs.map((comb, i) => {
        return (
        <div>{i+1}) {comb.toString()}</div>
        )
    })

    // const findRect = comb, index => {
    //     comb

    //     const getRect = arr4combs.map((comb, i) => {
    //         return (
    //             x1 = points[`p${comb[0]}`].x
    //             x2 = points[`p${comb[1]}`].x

    //             x = x1 - x2
    //         )
    //     })
    // }

    const arrRect = arr4combs.filter((comb, i) => {
        let isRect = false

        let x1 = points[`p${comb[0]}`].x
        let x2 = points[`p${comb[1]}`].x
        let x3 = points[`p${comb[2]}`].x
        let x4 = points[`p${comb[3]}`].x

        let y1 = points[`p${comb[0]}`].y
        let y2 = points[`p${comb[1]}`].y
        let y3 = points[`p${comb[2]}`].y
        let y4 = points[`p${comb[3]}`].y

        let xa = Math.abs(x1 - x2)
        let xb = Math.abs(x3 - x4)
        let ya = Math.abs(y1 - y3)
        let yb = Math.abs(y2 - y4)

        if ( xa === xb && ya === yb) {
            console.log('it is rectangle')
            isRect = true
        } else {
            console.log('it is not rectangle')
            //arr4combs.filter(comb => comb)
        }

        return isRect === true
    });

    const sortArrRect = arrRect.map((comb, i) => {
        return (
        <div>{i+1}) {comb.toString()}</div>
        )
    })



    return (
        <>
        <div>{all_points}</div>
        <br></br>
        <div>4 points combinations:</div>
        <div>{sortArrCombs}</div>
        <br></br>
        <div>Rectangles:</div>
        <div>{sortArrRect}</div>
        <br></br>
        <div>Total Rectangles: {arrRect.length}</div>
        </>
    )
}

export default Points