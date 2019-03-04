import { asyncRouterMap } from "@/router";
import _ from "lodash";

function hasPermission(roles, route) {
  if (route.meta && route.meta.role) {
    return roles.some(role => route.meta.role.indexOf(role) >= 0);
  } else {
    return true;
  }
}

const permission = {
  state: {
    routers: [],
    addRouters: []
  },

  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers;
      var sidebarRouters = _.filter(_.cloneDeep(routers), v => {
        if (v.sidebarLink === true) {
          if (v.children && v.children.length > 0) {
            v.children = _.filter(v.children, child => {
              if (child.sidebarIgnore !== true) {
                return true;
              }
              return false;
            });
          }
          return true;
        } else {
          return false;
        }
      });
      state.routers =
        sidebarRouters.length > 0 ? sidebarRouters[0].children : [];
    }
  },

  actions: {
    GenerateRoutes({ commit }, data) {
      const { roles } = data;
      const accessedRouters = asyncRouterMap.filter(v => {
        if (hasPermission(roles, v)) {
          if (v.children && v.children.length > 0) {
            v.children = v.children.filter(child => {
              if (hasPermission(roles, child)) {
                return child;
              }
              return false;
            });
            return v;
          } else {
            return v;
          }
        }
        return false;
      });
      commit("SET_ROUTERS", accessedRouters);
    }
  }
};

export default permission;
