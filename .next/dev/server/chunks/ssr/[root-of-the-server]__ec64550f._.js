module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/hero.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HERO_STORAGE_KEY",
    ()=>HERO_STORAGE_KEY,
    "defaultHero",
    ()=>defaultHero
]);
const HERO_STORAGE_KEY = "hero_setting_v1";
const defaultHero = {
    title: "요리 사진 포트폴리오 · 레시피 아카이브",
    subtitle: "내가 만든 요리를 기록하고, 거기서 나온 아이디어를 함께 모아두는 공간",
    imageUrl: "https://picsum.photos/seed/hero/1400/700",
    ctaText: "포트폴리오 보기",
    ctaHref: "/portfolio"
};
}),
"[project]/components/MainHero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hero$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hero.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function MainHero() {
    const [hero, setHero] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hero$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultHero"]);
    const loadHero = ()=>{
        try {
            const raw = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hero$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HERO_STORAGE_KEY"]);
            if (raw) {
                setHero({
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hero$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultHero"],
                    ...JSON.parse(raw)
                });
            } else {
                setHero(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hero$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultHero"]);
            }
        } catch  {
            setHero(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hero$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultHero"]);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadHero();
        const onStorage = (e)=>{
            if (e.key === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hero$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HERO_STORAGE_KEY"]) loadHero();
        };
        const onHeroUpdated = ()=>{
            loadHero();
        };
        window.addEventListener("storage", onStorage);
        window.addEventListener("hero-updated", onHeroUpdated);
        return ()=>{
            window.removeEventListener("storage", onStorage);
            window.removeEventListener("hero-updated", onHeroUpdated);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            border: "1px solid #eee",
            borderRadius: 18,
            overflow: "hidden",
            marginBottom: 18
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: hero.imageUrl || __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hero$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultHero"].imageUrl,
                alt: "hero",
                style: {
                    width: "100%",
                    height: 320,
                    objectFit: "cover",
                    display: "block"
                }
            }, void 0, false, {
                fileName: "[project]/components/MainHero.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 26,
                            fontWeight: 900
                        },
                        children: hero.title
                    }, void 0, false, {
                        fileName: "[project]/components/MainHero.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 8,
                            opacity: 0.85
                        },
                        children: hero.subtitle
                    }, void 0, false, {
                        fileName: "[project]/components/MainHero.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 16
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: hero.ctaHref || "/portfolio",
                            style: {
                                display: "inline-block",
                                padding: "10px 14px",
                                borderRadius: 12,
                                border: "1px solid #ddd",
                                fontWeight: 900,
                                textDecoration: "none",
                                color: "inherit"
                            },
                            children: hero.ctaText
                        }, void 0, false, {
                            fileName: "[project]/components/MainHero.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/MainHero.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/MainHero.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/MainHero.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ec64550f._.js.map