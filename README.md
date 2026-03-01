# SETTING_react_native_expo

React Native + Expo로 개발하는 앱 프로젝트입니다.  
[Expo](https://expo.dev) + [Expo Router](https://docs.expo.dev/router/introduction)(파일 기반 라우팅)를 사용합니다.

---

## 프로젝트 구조

```
├── app/                    # 화면(라우트) — 파일 하나 = 한 화면
│   ├── _layout.tsx         # 루트 레이아웃 (스택 네비게이션, 테마)
│   ├── modal.tsx           # 모달 화면 (/modal)
│   └── (tabs)/             # 탭 그룹 (괄호 = URL에 안 나오는 그룹)
│       ├── _layout.tsx     # 탭 레이아웃 (Home, Explore)
│       ├── index.tsx       # Home 탭 → 경로 "/"
│       └── explore.tsx     # Explore 탭 → 경로 "/explore"
├── components/             # 재사용 UI 컴포넌트
├── constants/              # 테마 등 상수
├── hooks/                  # useColorScheme 등 커스텀 훅
├── assets/                 # 이미지, 아이콘, 스플래시
├── app.json                # Expo 앱 설정 (이름, 아이콘, 스킴 등)
├── package.json
└── tsconfig.json           # @/* → 프로젝트 루트 경로 별칭
```

- **화면 추가**: `app/` 아래에 파일/폴더를 만들면 자동으로 라우트가 됩니다.
- **import 경로**: `@/components/...`, `@/hooks/...` 처럼 `@/`로 루트 기준 import 가능합니다.

---

## 실행 방법

```bash
npm install
npx expo start
```

- 터미널에 QR 코드가 뜨면 **Expo Go** 앱으로 스캔해서 실기기에서 실행 가능합니다.
- **Android 에뮬레이터**: `npm run android` 또는 터미널에서 `a` 입력.
- **iOS 시뮬레이터**: Mac에서 `npm run ios` 또는 터미널에서 `i` 입력.
- **웹**: `npm run web` 또는 터미널에서 `w` 입력.

---

## Expo Router (파일 기반 라우팅)

| 파일 경로                | URL 경로    |
| ------------------------ | ----------- |
| `app/(tabs)/index.tsx`   | `/` (첫 탭) |
| `app/(tabs)/explore.tsx` | `/explore`  |
| `app/modal.tsx`          | `/modal`    |

- `_layout.tsx`: 해당 구간의 공통 레이아웃(스택/탭 등).
- `(폴더명)`: 괄호로 감싼 폴더는 URL에 포함되지 않고, 레이아웃 그룹용으로만 사용됩니다.

---

## 화면 추가/수정 팁

- **새 탭 추가**: `app/(tabs)/` 아래에 `새이름.tsx`를 만들고, `app/(tabs)/_layout.tsx`에서 `<Tabs.Screen name="새이름" ... />` 추가.
- **새 스택 화면**: `app/` 아래에 `새화면.tsx`를 만들고, `app/_layout.tsx`의 `<Stack>` 안에 `<Stack.Screen name="새화면" ... />` 추가.
- **공통 UI**: `components/`에 두고 `@/components/...` 로 import.

---

## 스타일링 (NativeWind)

이 프로젝트에는 **NativeWind**(Tailwind CSS for RN)가 적용되어 있습니다. `View`, `Text` 등 React Native 컴포넌트에 `className`으로 Tailwind 유틸리티를 사용할 수 있습니다.

```tsx
import { View, Text } from 'react-native';

<View className="flex-1 items-center justify-center bg-white">
  <Text className="text-xl font-bold text-blue-500">Hello NativeWind</Text>
</View>
```

- **설정 파일**: `global.css`, `tailwind.config.js`, `babel.config.js`, `metro.config.js`, `app/_layout.tsx`에서 `import '../global.css'`
- **문서**: [NativeWind](https://www.nativewind.dev/)

---

## 주요 설정 파일

| 파일              | 역할                                                               |
| ----------------- | ------------------------------------------------------------------ |
| **app.json**      | 앱 이름, slug, 아이콘, 스플래시, iOS/Android/웹 옵션, 플러그인     |
| **package.json**  | 의존성, `main: "expo-router/entry"` (Expo Router 진입점), 스크립트 |
| **tsconfig.json** | `paths: { "@/*": ["./*"] }` 로 `@/` 별칭 설정                      |

---

## 참고 링크

- [Expo 공식 문서](https://docs.expo.dev/)
- [Expo Router 소개](https://docs.expo.dev/router/introduction/)
- [Learn Expo 튜토리얼](https://docs.expo.dev/tutorial/introduction/)
