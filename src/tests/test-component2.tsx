import React, { useEffect, useState } from "react";

export  function Test1() {
    const [state, setState] = useState<Array<string>>([]);
    console.log(state);
    useEffect(
        () => {
            fetch('locachost3000').then(res => res.json()).then((res: Array<string>) => setState(res))
        }, []);

    return (
        <div>           
           <div data-testid={'bbb'}>
                {state.map(it => <div data-testid={'aaa'}>{it}</div>)}
           </div>
        </div>
    )
}

