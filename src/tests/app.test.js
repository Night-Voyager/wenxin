import { mount } from "@vue/test-utils";
import App from "../App.vue";

test("render app", () => {
    const spy = vi.spyOn(console, 'log');

    mount(App, {shallow: true});

    expect(spy).toHaveBeenCalledOnce();
    expect(spy).toHaveBeenLastCalledWith('👋 This message is being logged by "App.vue", included via Vite');
});
