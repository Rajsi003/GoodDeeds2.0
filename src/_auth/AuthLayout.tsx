
// import { Outlet , Navigate} from 'react-router-dom';




// const authLayout = () => {
//   const isAuthenticated  = false;

//   return (
//     <>
//       {isAuthenticated ? (
//         <Navigate to="/" />
//       ) : (
//         <>
//           <section className="flex flex-1 justify-center items-center flex-col py-10">
//             <Outlet />
//           </section>
//           <img
//             src="/assets/images/side-img.html"
//             alt="logo"
//             className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
//           />

//           </>
//       )}
//     </>
//   )
// }

// export default authLayout
import { Outlet, Navigate } from 'react-router-dom';

const authLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>

          {/* Replace image with Canva embed */}
          <div className="hidden xl:block h-screen w-1/2">
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <iframe
                loading="lazy"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  top: 0,
                  left: 0,
                  border: 'none',
                  padding: 0,
                  margin: 0,
                }}
                src="https://www.canva.com/design/DAGrPlJNYL4/FqJHtyGJ65irnq_mC1RCiA/view?embed"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default authLayout;
