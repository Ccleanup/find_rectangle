import React from 'react'

const points = {
    p1: { id: '1', x: '-3', y: '3' },
    p2: { id: '2', x: '3', y: '3' },
    p3: { id: '3', x: '-6', y: '0' },
    p4: { id: '4', x: '0', y: '0' },
    p5: { id: '5', x: '3', y: '0' },
    p6: { id: '6', x: '-3', y: '-3' },
    p7: { id: '7', x: '0', y: '-3' },
    p8: { id: '8', x: '3', y: '-3' },
    // p9: { id: '9', x: '-7', y: '-1' },   // test for additional points
    // p10: { id: '10', x: '-4', y: '-4' }
}

const Points = () => {
    const listAllPoints = Object.keys(points).map((p, i) => {
        return (
            <div>this is point - {p} with id: {points[p].id}, x: {points[p].x}, y: {points[p].y}</div>
        )
    })

    const arrIds = Object.keys(points).map((p, i) => points[p].id)

    // generate all possible combinations of arrIds (no repeat)
    let arrIds1 = arrIds
    let arrIds2 = arrIds
    let arrIds3 = arrIds
    let arrIds4 = arrIds
    let arr4combs =[]
    let arr4comb =[]
    
    for (let i=0; i < arrIds1.length; i++) {
        for (let j=i+1; j < arrIds2.length; j++) {  // i+1 so that no repeat
            for (let k=j+1; k < arrIds3.length; k++) {
                for (let l=k+1; l < arrIds4.length; l++) {
                    arr4comb =[]
                    arr4comb.push(arrIds1[i])
                    arr4comb.push(arrIds2[j])
                    arr4comb.push(arrIds3[k])
                    arr4comb.push(arrIds4[l])
                    arr4combs.push(arr4comb)
                }
            }
        }
    }

    const listArrCombs = arr4combs.map((comb, i) => {
        return (
        <div>{i+1}) {comb.toString()}</div>
        )
    })

    const findRect = arr4combs.filter((comb, i) => {
        
        let x1 = points[`p${comb[0]}`].x
        let x2 = points[`p${comb[1]}`].x
        let x3 = points[`p${comb[2]}`].x
        let x4 = points[`p${comb[3]}`].x

        let y1 = points[`p${comb[0]}`].y
        let y2 = points[`p${comb[1]}`].y
        let y3 = points[`p${comb[2]}`].y
        let y4 = points[`p${comb[3]}`].y

        let xa = Math.abs(x1 - x2)  // 6x distance in a rectangles: 4 sides + 2 cross
        let xb = Math.abs(x1 - x3)
        let xc = Math.abs(x3 - x4)
        let xd = Math.abs(x2 - x4)
        let xe = Math.abs(x1 - x4)
        let xf = Math.abs(x2 - x3)

        let ya = Math.abs(y1 - y2)
        let yb = Math.abs(y1 - y3)
        let yc = Math.abs(y3 - y4)
        let yd = Math.abs(y2 - y4)
        let ye = Math.abs(y1 - y4)
        let yf = Math.abs(y2 - y3)

        let isRect = false
        if ( (xa === yc && xb === yd && xc === ya && xd === yb) ||
        (xa === xc && xb === xd && xe === xf && ya === yc && yb === yd && ye === yf ) )
            isRect = true

        return isRect === true
    });

    const listFindRect = findRect.map((comb, i) => {
        return (
        <div>{i+1}) {comb.toString()}</div>
        )
    })



    return (
        <>
        <div>{listAllPoints}</div>
        <br></br>
        <div>4 points combinations:</div>
        <div>{listArrCombs}</div>
        <br></br>
        <div>Rectangles:</div>
        <div>{listFindRect}</div>
        <br></br>
        <div>Total Rectangles: {findRect.length}</div>
        </>
    )
}

export default Points