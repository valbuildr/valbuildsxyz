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
            viewBox="0 0 24 19"
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
        <g clip-path="url(#clip0_9_6)">
            <path d="M20.3303 1.52336C18.7535 0.80145 17.0889 0.289302 15.3789 0C15.1449 0.418288 14.9332 0.848651 14.7447 1.28929C12.9233 1.01482 11.071 1.01482 9.24963 1.28929C9.06097 0.848696 8.84926 0.418339 8.61537 0C6.90435 0.291745 5.23861 0.805108 3.6602 1.52714C0.526645 6.16328 -0.322812 10.6843 0.101917 15.1411C1.937 16.4969 3.99099 17.5281 6.17459 18.1897C6.66627 17.5284 7.10135 16.8269 7.47521 16.0925C6.76512 15.8273 6.07977 15.5001 5.42707 15.1147C5.59885 14.9901 5.76685 14.8617 5.92919 14.7371C7.82839 15.6303 9.90126 16.0934 12 16.0934C14.0987 16.0934 16.1716 15.6303 18.0708 14.7371C18.235 14.8712 18.403 14.9995 18.5729 15.1147C17.9189 15.5007 17.2323 15.8285 16.521 16.0944C16.8944 16.8284 17.3295 17.5294 17.8216 18.1897C20.0071 17.5307 22.0626 16.5001 23.898 15.143C24.3964 9.97452 23.0467 5.49504 20.3303 1.52336ZM8.0132 12.4002C6.82962 12.4002 5.8518 11.3261 5.8518 10.0047C5.8518 8.68334 6.79564 7.59981 8.00942 7.59981C9.2232 7.59981 10.1935 8.68334 10.1727 10.0047C10.1519 11.3261 9.21943 12.4002 8.0132 12.4002ZM15.9868 12.4002C14.8013 12.4002 13.8273 11.3261 13.8273 10.0047C13.8273 8.68334 14.7711 7.59981 15.9868 7.59981C17.2024 7.59981 18.1652 8.68334 18.1444 10.0047C18.1236 11.3261 17.193 12.4002 15.9868 12.4002Z" />
        </g>
        <defs>
            <clipPath id="clip0_9_6">
                <rect width="24" height="18.1897" />
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
            viewBox="0 0 24 19"
    >
        {#if title.id && title.title}
            <title id={title.id}>{title.title}</title>
        {/if}
        {#if desc.id && desc.desc}
            <desc id={desc.id}>{desc.desc}</desc>
        {/if}
        <g clip-path="url(#clip0_9_6)">
            <path d="M20.3303 1.52336C18.7535 0.80145 17.0889 0.289302 15.3789 0C15.1449 0.418288 14.9332 0.848651 14.7447 1.28929C12.9233 1.01482 11.071 1.01482 9.24963 1.28929C9.06097 0.848696 8.84926 0.418339 8.61537 0C6.90435 0.291745 5.23861 0.805108 3.6602 1.52714C0.526645 6.16328 -0.322812 10.6843 0.101917 15.1411C1.937 16.4969 3.99099 17.5281 6.17459 18.1897C6.66627 17.5284 7.10135 16.8269 7.47521 16.0925C6.76512 15.8273 6.07977 15.5001 5.42707 15.1147C5.59885 14.9901 5.76685 14.8617 5.92919 14.7371C7.82839 15.6303 9.90126 16.0934 12 16.0934C14.0987 16.0934 16.1716 15.6303 18.0708 14.7371C18.235 14.8712 18.403 14.9995 18.5729 15.1147C17.9189 15.5007 17.2323 15.8285 16.521 16.0944C16.8944 16.8284 17.3295 17.5294 17.8216 18.1897C20.0071 17.5307 22.0626 16.5001 23.898 15.143C24.3964 9.97452 23.0467 5.49504 20.3303 1.52336ZM8.0132 12.4002C6.82962 12.4002 5.8518 11.3261 5.8518 10.0047C5.8518 8.68334 6.79564 7.59981 8.00942 7.59981C9.2232 7.59981 10.1935 8.68334 10.1727 10.0047C10.1519 11.3261 9.21943 12.4002 8.0132 12.4002ZM15.9868 12.4002C14.8013 12.4002 13.8273 11.3261 13.8273 10.0047C13.8273 8.68334 14.7711 7.59981 15.9868 7.59981C17.2024 7.59981 18.1652 8.68334 18.1444 10.0047C18.1236 11.3261 17.193 12.4002 15.9868 12.4002Z" />
        </g>
        <defs>
            <clipPath id="clip0_9_6">
                <rect width="24" height="18.1897" />
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