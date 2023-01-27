import React, { useEffect, useState } from "react";

export  function Test1() {
    const [state, setState] = useState<Array<string>>([]);
    useEffect(
        () => {
            fetch('locachost3000').then(res => res.json()).then((res: Array<string>) => setState(res))
        }, []);

    return (
        <div>
           {state.map(it => <div>{it}</div>)}
        </div>
    )
}

