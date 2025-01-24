<script lang="ts">
    import { getContext } from "svelte";
    import { twMerge } from "tailwind-merge";
    type TitleType = {
        id?: string;
        title?: string;
    };
    type DescType = {
        id?: string;
        desc?: string;
    };

    interface BaseProps {
        size?: "xs" | "sm" | "md" | "lg" | "xl";
        role?: string;
        color?: string;
        withEvents?: boolean;
        onclick?: (event: MouseEvent) => void;
        onkeydown?: (event: KeyboardEvent) => void;
        onkeyup?: (event: KeyboardEvent) => void;
    }

    interface CtxType extends BaseProps {}
    interface Props extends BaseProps {
        title?: TitleType;
        desc?: DescType;
        ariaLabel?: string;
        size?: "xs" | "sm" | "md" | "lg" | "xl";
    }

    const ctx: CtxType = getContext("iconCtx") ?? {};
    const sizes = {
        xs: "w-3 h-3",
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-8 h-8",
    };

    export let size: Props["size"] = ctx.size || "md";
    export let role: Props["role"] = ctx.role || "img";
    export let color: Props["color"] = ctx.color || "currentColor";
    export let withEvents: Props["withEvents"] = ctx.withEvents || false;
    export let title: TitleType = {};
    export let desc: DescType = {};

    let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
    let hasDescription = false;

    $: if (title.id || desc.id) {
        hasDescription = true;
    } else {
        hasDescription = false;
    }
    export let ariaLabel = "twitch solid";
</script>

{#if withEvents}
    <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            {...$$restProps}
            class={twMerge("shrink-0", sizes[size ?? "md"], $$props.class)}
            {role}
            aria-label={ariaLabel}
            aria-describedby={hasDescription ? ariaDescribedby : undefined}
            viewBox="0 0 24 24"
            on:click
            on:keydown
            on:keyup
            on:focus
            on:blur
            on:mouseenter
            on:mouseleave
            on:mouseover
            on:mouseout
    >
        {#if title.id && title.title}
            <title id={title.id}>{title.title}</title>
        {/if}
        {#if desc.id && desc.desc}
            <desc id={desc.id}>{desc.desc}</desc>
        {/if}
        <g clip-path="url(#clip0_6_4)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9642 0C5.34833 0 0 5.38776 0 12.0531C0 17.3811 3.42686 21.8912 8.18082 23.4874C8.77518 23.6074 8.9929 23.2281 8.9929 22.909C8.9929 22.6296 8.97331 21.6718 8.97331 20.6738C5.64514 21.3923 4.95208 19.237 4.95208 19.237C4.41722 17.8401 3.62473 17.4811 3.62473 17.4811C2.53543 16.7427 3.70408 16.7427 3.70408 16.7427C4.91241 16.8225 5.54645 17.9799 5.54645 17.9799C6.61592 19.8157 8.33927 19.297 9.03257 18.9776C9.13151 18.1993 9.44865 17.6606 9.78539 17.3613C7.13094 17.0819 4.33812 16.0442 4.33812 11.4144C4.33812 10.0974 4.81322 9.01984 5.56604 8.1818C5.44727 7.88253 5.03118 6.64506 5.68506 4.98882C5.68506 4.98882 6.69527 4.66947 8.97306 6.22604C9.94827 5.9622 10.954 5.82799 11.9642 5.82686C12.9744 5.82686 14.0042 5.96669 14.9552 6.22604C17.2332 4.66947 18.2434 4.98882 18.2434 4.98882C18.8973 6.64506 18.481 7.88253 18.3622 8.1818C19.1349 9.01984 19.5904 10.0974 19.5904 11.4144C19.5904 16.0442 16.7976 17.0618 14.1233 17.3613C14.5592 17.7404 14.9353 18.4587 14.9353 19.5962C14.9353 21.2126 14.9158 22.5098 14.9158 22.9087C14.9158 23.2281 15.1337 23.6074 15.7278 23.4877C20.4818 21.8909 23.9087 17.3811 23.9087 12.0531C23.9282 5.38776 18.5603 0 11.9642 0Z" />
        </g>
        <defs>
            <clipPath id="clip0_6_4">
                <rect width="24" height="23.5102" />
            </clipPath>
        </defs>
    </svg>
{:else}
    <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            {...$$restProps}
            class={twMerge("shrink-0", sizes[size ?? "md"], $$props.class)}
            {role}
            aria-label={ariaLabel}
            aria-describedby={hasDescription ? ariaDescribedby : undefined}
            viewBox="0 0 24 24"
    >
        {#if title.id && title.title}
            <title id={title.id}>{title.title}</title>
        {/if}
        {#if desc.id && desc.desc}
            <desc id={desc.id}>{desc.desc}</desc>
        {/if}
        <g clip-path="url(#clip0_6_4)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9642 0C5.34833 0 0 5.38776 0 12.0531C0 17.3811 3.42686 21.8912 8.18082 23.4874C8.77518 23.6074 8.9929 23.2281 8.9929 22.909C8.9929 22.6296 8.97331 21.6718 8.97331 20.6738C5.64514 21.3923 4.95208 19.237 4.95208 19.237C4.41722 17.8401 3.62473 17.4811 3.62473 17.4811C2.53543 16.7427 3.70408 16.7427 3.70408 16.7427C4.91241 16.8225 5.54645 17.9799 5.54645 17.9799C6.61592 19.8157 8.33927 19.297 9.03257 18.9776C9.13151 18.1993 9.44865 17.6606 9.78539 17.3613C7.13094 17.0819 4.33812 16.0442 4.33812 11.4144C4.33812 10.0974 4.81322 9.01984 5.56604 8.1818C5.44727 7.88253 5.03118 6.64506 5.68506 4.98882C5.68506 4.98882 6.69527 4.66947 8.97306 6.22604C9.94827 5.9622 10.954 5.82799 11.9642 5.82686C12.9744 5.82686 14.0042 5.96669 14.9552 6.22604C17.2332 4.66947 18.2434 4.98882 18.2434 4.98882C18.8973 6.64506 18.481 7.88253 18.3622 8.1818C19.1349 9.01984 19.5904 10.0974 19.5904 11.4144C19.5904 16.0442 16.7976 17.0618 14.1233 17.3613C14.5592 17.7404 14.9353 18.4587 14.9353 19.5962C14.9353 21.2126 14.9158 22.5098 14.9158 22.9087C14.9158 23.2281 15.1337 23.6074 15.7278 23.4877C20.4818 21.8909 23.9087 17.3811 23.9087 12.0531C23.9282 5.38776 18.5603 0 11.9642 0Z" />
        </g>
        <defs>
            <clipPath id="clip0_6_4">
                <rect width="24" height="23.5102" />
            </clipPath>
        </defs>
    </svg>
{/if}

<!--
  @component
  [Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
  ## Props
  @prop export let size: Props['size'] = ctx.size || 'md';
  @prop export let role: Props['role'] = ctx.role || 'img';
  @prop export let color: Props['color'] = ctx.color || 'currentColor';
  @prop export let withEvents: Props['withEvents'] = ctx.withEvents || false;
  @prop export let title: TitleType = {};
  @prop export let desc: DescType = {};
  @prop export let ariaLabel = 'twitch solid';
  -->