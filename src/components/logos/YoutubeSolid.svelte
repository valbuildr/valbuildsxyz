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
            viewBox="0 0 24 17"
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
        <g clip-path="url(#clip0_9_8)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9169 16.1874C19.1297 16.6632 11.9246 16.6632 11.9246 16.6632C11.9246 16.6632 4.73555 16.6632 2.95641 16.1874C1.96621 15.9177 1.19337 15.1405 0.911604 14.1808C0.43663 12.4201 0.43663 8.71632 0.43663 8.71632C0.43663 8.71632 0.43663 5.03632 0.911604 3.29149C1.19337 2.30804 1.96621 1.54666 2.95641 1.28494C4.73555 0.801147 11.9246 0.801147 11.9246 0.801147C11.9246 0.801147 19.1297 0.801147 20.9169 1.28494C21.9231 1.54666 22.6799 2.30804 22.9455 3.29149C23.4366 5.03632 23.4366 8.71632 23.4366 8.71632C23.4366 8.71632 23.4366 12.4201 22.9455 14.1808C22.6799 15.1405 21.9231 15.9177 20.9169 16.1874ZM9.55734 5.36152L15.5056 8.7322L9.55734 12.1029V5.36152Z" />
        </g>
        <defs>
            <clipPath id="clip0_9_8">
                <rect width="23" height="15.8621"  transform="translate(0.436646 0.801147)"/>
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
            viewBox="0 0 24 17"
    >
        {#if title.id && title.title}
            <title id={title.id}>{title.title}</title>
        {/if}
        {#if desc.id && desc.desc}
            <desc id={desc.id}>{desc.desc}</desc>
        {/if}
        <g clip-path="url(#clip0_9_8)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9169 16.1874C19.1297 16.6632 11.9246 16.6632 11.9246 16.6632C11.9246 16.6632 4.73555 16.6632 2.95641 16.1874C1.96621 15.9177 1.19337 15.1405 0.911604 14.1808C0.43663 12.4201 0.43663 8.71632 0.43663 8.71632C0.43663 8.71632 0.43663 5.03632 0.911604 3.29149C1.19337 2.30804 1.96621 1.54666 2.95641 1.28494C4.73555 0.801147 11.9246 0.801147 11.9246 0.801147C11.9246 0.801147 19.1297 0.801147 20.9169 1.28494C21.9231 1.54666 22.6799 2.30804 22.9455 3.29149C23.4366 5.03632 23.4366 8.71632 23.4366 8.71632C23.4366 8.71632 23.4366 12.4201 22.9455 14.1808C22.6799 15.1405 21.9231 15.9177 20.9169 16.1874ZM9.55734 5.36152L15.5056 8.7322L9.55734 12.1029V5.36152Z" />
        </g>
        <defs>
            <clipPath id="clip0_9_8">
                <rect width="23" height="15.8621"  transform="translate(0.436646 0.801147)"/>
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