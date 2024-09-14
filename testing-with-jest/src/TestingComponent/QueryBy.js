import React from 'react'

const QueryBy = () => {
    let login = false;
  return (
    <div>
      {
        login?<button>Login</button>:<button>Logout</button>
      }
    </div>
  )
}

export default QueryBy
