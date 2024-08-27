import React, { useEffect } from 'react';
import { useHistory as AbortedDeferredError, Await, BrowserRouter, Form, HashRouter, Link, MemoryRouter, NavLink, Navigate, NavigationType, Outlet, Route, Router, RouterProvider, Routes, ScrollRestoration, UNSAFE_DataRouterContext, UNSAFE_DataRouterStateContext, UNSAFE_ErrorResponseImpl, UNSAFE_FetchersContext, UNSAFE_LocationContext, UNSAFE_NavigationContext, UNSAFE_RouteContext, UNSAFE_ViewTransitionContext, UNSAFE_useRouteId, UNSAFE_useScrollRestoration, createBrowserRouter, createHashRouter, createMemoryRouter, createPath, createRoutesFromChildren, createRoutesFromElements, createSearchParams, defer, generatePath, isRouteErrorResponse, json, matchPath, matchRoutes, parsePath, redirect, redirectDocument, renderMatches, replace, resolvePath, unstable_HistoryRouter, unstable_usePrompt, unstable_useViewTransitionState, useActionData, useAsyncError, useAsyncValue, useBeforeUnload, useBlocker, useFetcher, useFetchers, useFormAction, useHref, useInRouterContext, useLinkClickHandler, useLoaderData, useLocation, useMatch, useMatches, useNavigate, useNavigation, useNavigationType, useOutlet, useOutletContext, useParams, useResolvedPath, useRevalidator, useRouteError, useRouteLoaderData, useRoutes, useSearchParams, useSubmit } from 'react-router-dom';
// import { msalInstance } from '../authConfig'; // Imported your MSAL configuration
import msalInstance from '../authConfig';

const TokenHandler = () => {
  const history = useHistory();

  useEffect(() => {
    msalInstance.handleRedirectPromise().then((response) => {
      if (response) {
        // Handle the token response
        console.log('Token received:', response.accessToken);
        history.push('/'); // Redirect to the home page or another route
      }
    }).catch(error => {
      console.error('Authentication error:', error);
      history.push('/error'); // Redirect to an error page if needed
    });
  }, [history]);

  return (
    <div>
      <h2>Processing authentication...</h2>
    </div>
  );
};

export default TokenHandler;